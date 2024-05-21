from django.urls import path
from .views import get_gender

urlpatterns = [
    path('gender', get_gender),
]