from django.urls import path
from .views import add_employee,get_employees,get_employee_by_id,delete_employee_by_id,celery_func

urlpatterns = [
    path('create',add_employee),
    path('',get_employees),
    path('<int:id>',get_employee_by_id),
    path('delete/<int:id>',delete_employee_by_id),
    path('celery', celery_func),
]