from rest_framework import serializers
from .models import Employee

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'

    def validate_first_name(self,value):
        if not value.isalpha():
            raise serializer.ValidationError("Should only contain alphabetic characters with .")
        return value

    def validate_last_name(self,value):
        if not value.isalpha():
            raise serializer.ValidationError("Should only contain alphabetic characters.")
        return value

    def validate_age(self,value):
        if value >= 100:
            raise serializer.ValidationError("Age above 100 is not valid")
        return value







