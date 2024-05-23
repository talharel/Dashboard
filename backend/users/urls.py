from django.urls import path
from .views import get_gender,get_groups_of_ages

urlpatterns = [
    path('gender', get_gender),
    path('ages', get_groups_of_ages),
]