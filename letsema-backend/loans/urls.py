from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'applications', views.LoanApplicationViewSet, basename='loanapplication')

urlpatterns = [
    path('', include(router.urls)),
]
