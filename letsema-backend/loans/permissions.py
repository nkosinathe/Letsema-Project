from rest_framework import permissions

class IsBorrowerOrLoanOfficer(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        # Borrowers can only access their own loans
        if obj.borrower.user == request.user:
            return True
        # Staff can access all loans
        return request.user.is_staff
    
    from rest_framework import permissions
