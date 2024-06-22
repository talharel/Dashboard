from django.urls import path
from .views import create_task,get_tasks,get_task_by_id,delete_task,get_employees_of_task,add_employee_for_task


urlpatterns = [
    path('create',create_task),
    path('',get_tasks),
    path('<int:id>', get_task_by_id),
    path('delete/<int:id>',delete_task),
    path('task/employees/<int:id>',get_employees_of_task),
    path('add/employee',add_employee_for_task),
]