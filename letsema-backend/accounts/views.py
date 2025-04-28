from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework import viewsets
from django.http import JsonResponse
from django.contrib.auth import get_user_model
from rest_framework.permissions import IsAuthenticated  # <- You forgot to import this!
from .serializers import CustomTokenObtainPairSerializer, RoleRegisterSerializer, UserSerializer

User = get_user_model()

# View for managing users (only accessible to Admins)
class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

# Custom token view for JWT authentication
class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

# General view to register any user (borrower, loan officer, or analyst)
class RegisterUserView(generics.CreateAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = RoleRegisterSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = serializer.save()
        role = request.data.get("role")

        # Optional: Save additional profile info if needed
        if hasattr(user, 'profile'):
            user.profile.role = role
            user.profile.save()

        return Response({
            "user": user.username,
            "role": role,
            "message": f"{role.capitalize()} registered successfully"
        }, status=status.HTTP_201_CREATED)

# NEW: Specific view to register borrowers only
class RegisterBorrowerView(generics.CreateAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = RoleRegisterSerializer

    def create(self, request, *args, **kwargs):
        # Force role to borrower
        request.data._mutable = True  # To allow editing POST data
        request.data['is_borrower'] = True
        request.data['is_loan_officer'] = False
        request.data['is_financial_analyst'] = False
        request.data._mutable = False

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        return Response({
            "user": user.username,
            "role": "borrower",
            "message": "Borrower registered successfully"
        }, status=status.HTTP_201_CREATED)

# Welcome API for Letsema
def api_welcome(request):
    return JsonResponse({"message": "Welcome to Letsema API!"})
