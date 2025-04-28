from django.contrib import admin
from .models import LoanApplication

@admin.register(LoanApplication)
class LoanApplicationAdmin(admin.ModelAdmin):
    list_display = ('id', 'borrower', 'amount', 'status', 'application_date')
    list_filter = ('status',)
    search_fields = ('borrower__user__username', 'purpose')
    actions = ['approve_selected']

    def approve_selected(self, request, queryset):
        queryset.update(status='APPROVED', approved_by=request.user)
    approve_selected.short_description = "Approve selected loans"
