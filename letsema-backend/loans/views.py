from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.utils import timezone
from .models import LoanApplication
from .serializers import LoanApplicationSerializer
from .permissions import IsBorrowerOrLoanOfficer

class LoanApplicationViewSet(viewsets.ModelViewSet):
    queryset = LoanApplication.objects.all()
    serializer_class = LoanApplicationSerializer
    permission_classes = [permissions.IsAuthenticated, IsBorrowerOrLoanOfficer]
    filterset_fields = ['status', 'borrower']
    search_fields = ['purpose', 'borrower__user__username']

    def get_queryset(self):
        if self.request.user.is_staff:
            return self.queryset
        return self.queryset.filter(borrower__user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(borrower=self.request.user.borrower_profile)

    @action(detail=True, methods=['post'])
    def approve(self, request, pk=None):
        loan = self.get_object()
        loan.status = 'APPROVED'
        loan.approved_by = request.user
        loan.approved_date = timezone.now()
        loan.save()
        return Response({'status': 'loan approved'})

    @action(detail=True, methods=['post'])
    def reject(self, request, pk=None):
        loan = self.get_object()
        loan.status = 'REJECTED'
        loan.save()
        return Response({'status': 'loan rejected'})
