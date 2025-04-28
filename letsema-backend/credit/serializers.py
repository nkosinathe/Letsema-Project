from rest_framework import serializers
from .models import CreditRecord

class CreditRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = CreditRecord
        fields = ['borrower_id', 'mfi_id', 'loan_history', 'default_count', 'total_loans']
