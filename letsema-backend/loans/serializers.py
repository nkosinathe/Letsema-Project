from rest_framework import serializers
from .models import LoanApplication
from accounts.serializers import UserSerializer

class LoanApplicationSerializer(serializers.ModelSerializer):
    borrower_details = UserSerializer(source='borrower.user', read_only=True)
    approved_by_details = UserSerializer(source='approved_by', read_only=True)
    status_display = serializers.CharField(source='get_status_display', read_only=True)

    class Meta:
        model = LoanApplication
        fields = [
            'id', 'borrower', 'borrower_details', 'amount', 'purpose',
            'application_date', 'status', 'status_display',
            'approved_by', 'approved_by_details', 'approved_date'
        ]
        read_only_fields = ['application_date', 'approved_by', 'approved_date']
