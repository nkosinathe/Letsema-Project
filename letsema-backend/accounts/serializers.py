from rest_framework import serializers
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import BorrowerProfile, LoanOfficerProfile, AnalystProfile

User = get_user_model()

# Custom Token Serializer to add role information to the JWT
class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add the user's role to the JWT token
        if user.is_borrower:
            token['role'] = 'borrower'
        elif user.is_loan_officer:
            token['role'] = 'loan_officer'
        elif user.is_analyst:
            token['role'] = 'analyst'
        return token

# Serializer for Borrower profile data
class BorrowerProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = BorrowerProfile
        fields = ['national_id', 'phone_number', 'address', 'credit_score']
        read_only_fields = ['credit_score']

# Serializer for Loan Officer profile data
class LoanOfficerProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = LoanOfficerProfile
        fields = ['employee_id', 'office_location', 'contact_number']

# Serializer for Analyst profile data
class AnalystProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnalystProfile
        fields = ['employee_id', 'department', 'work_email']

# Register user with role selection (borrower, loan_officer, or analyst)
class RoleRegisterSerializer(serializers.ModelSerializer):
    profile = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'is_borrower', 'is_loan_officer', 'is_financial_analyst']
        extra_kwargs = {'password': {'write_only': True}}

    def get_profile(self, obj):
        # This method handles dynamically adding the correct profile serializer based on the role
        if obj.is_borrower:
            return BorrowerProfileSerializer(obj.borrowerprofile).data
        elif obj.is_loan_officer:
            return LoanOfficerProfileSerializer(obj.loanofficerprofile).data
        elif obj.is_analyst:
            return AnalystProfileSerializer(obj.analystprofile).data
        return {}

    def create(self, validated_data):
        profile_data = validated_data.pop('profile', None)
        role = validated_data.get('role', None)

        # Create the user with a specified role
        user = User.objects.create_user(**validated_data)

        # Assign the profile and role to the user
        if role == 'borrower':
            user.is_borrower = True
            user.save()
            if profile_data:
                BorrowerProfile.objects.create(user=user, **profile_data)
        elif role == 'loan_officer':
            user.is_loan_officer = True
            user.save()
            if profile_data:
                LoanOfficerProfile.objects.create(user=user, **profile_data)
        elif role == 'analyst':
            user.is_financial_analyst = True
            user.save()
            if profile_data:
                AnalystProfile.objects.create(user=user, **profile_data)
        
        return user

# ============================
# NEW: Basic UserSerializer added
# ============================

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'is_borrower', 'is_loan_officer', 'is_financial_analyst']


