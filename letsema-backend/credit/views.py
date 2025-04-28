from rest_framework import generics
from .models import CreditRecord
from .serializers import CreditRecordSerializer

class CreditHistoryView(generics.ListAPIView):
    serializer_class = CreditRecordSerializer
    
    def get_queryset(self):
        national_id = self.request.query_params.get('national_id')
        return CreditRecord.objects.filter(borrower_id=national_id)
