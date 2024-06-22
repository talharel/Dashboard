from .models import Task
from rest_framework import serializers
from employees.serializer import EmployeeSerializer

class TaskSerializer(serializers.ModelSerializer):
    employees = EmployeeSerializer(many=True)
    class Meta:
        model = Task
        fields = '__all__'