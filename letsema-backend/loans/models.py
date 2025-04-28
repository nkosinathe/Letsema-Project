from django.db import models
from accounts.models import BorrowerProfile
from django.contrib.auth import get_user_model



User = get_user_model()

class LoanApplication(models.Model):
    STATUS_CHOICES = (
        ('PENDING', 'Pending'),
        ('APPROVED', 'Approved'),
        ('REJECTED', 'Rejected'),
        ('DEFAULTED', 'Defaulted'),
    )

    borrower = models.ForeignKey(BorrowerProfile, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    purpose = models.TextField()
    application_date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='PENDING')
    approved_by = models.ForeignKey(User, null=True, blank=True, on_delete=models.SET_NULL)
    approved_date = models.DateTimeField(null=True, blank=True)
