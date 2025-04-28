from django.contrib.auth.models import AbstractUser
from django.db import models

# Custom User model
class User(AbstractUser):
    is_borrower = models.BooleanField(default=False)
    is_loan_officer = models.BooleanField(default=False)
    is_financial_analyst = models.BooleanField(default=False)

# Borrower profile model
class BorrowerProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='borrower_profile')
    national_id = models.CharField(max_length=20, unique=True)
    phone_number = models.CharField(max_length=15)
    address = models.TextField()
    credit_score = models.IntegerField(default=300)

    def __str__(self):
        return f"{self.user.username}'s profile"

# Loan Officer profile model
class LoanOfficerProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='loan_officer_profile')
    department = models.CharField(max_length=100)
    # Add other relevant fields for loan officer

    def __str__(self):
        return f"{self.user.username}'s loan officer profile"

# Analyst profile model
class AnalystProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='analyst_profile')
    area_of_expertise = models.CharField(max_length=100)
    # Add other relevant fields for financial analysts

    def __str__(self):
        return f"{self.user.username}'s analyst profile"
