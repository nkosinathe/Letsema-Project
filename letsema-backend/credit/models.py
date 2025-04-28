from django.db import models

class CreditRecord(models.Model):
    borrower_id = models.CharField(max_length=50)
    mfi_id = models.CharField(max_length=50)
    loan_history = models.JSONField(default=list)
    default_count = models.IntegerField(default=0)
    total_loans = models.IntegerField(default=0)
    last_updated = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'credit_records'
