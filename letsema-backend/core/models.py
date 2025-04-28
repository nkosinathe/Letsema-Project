# accounts/models.py
from django.contrib.auth.models import AbstractUser

class Borrower(AbstractUser):
    credit_score = models.IntegerField(default=0)
    phone = models.CharField(max_length=20)
    
    class Meta:
        verbose_name = "Borrower"