from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializer import EmployeeSerializer
from .models import Employee



@api_view(['POST'])
def add_employee(request):
    try:
        serializer = EmployeeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response({'error':str(e)},status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
def get_employees(request):
    try:
        employees = Employee.objects.all()
        if employees.exists():
            serializer = EmployeeSerializer(employees, many=True)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({'error':str(e)},status.HTTP_500_INTERNAL_SERVER_ERROR)



@api_view(['GET'])
def get_employee_by_id(request, id):
    try:
        employee = Employee.objects.get(id=id)
    except Employee.DoesNotExist:
        return Response({'error': 'Employee not found'}, status=status.HTTP_404_NOT_FOUND)
    serializer = EmployeeSerializer(employee)
    return Response(serializer.data)



@api_view(['DELETE'])
def delete_employee_by_id(request, id):
    try:
        employee = Employee.objects.get(id=id)
        employee.delete()
        return Response({'message': 'Employee deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
    except Employee.DoesNotExist:
        return Response({'error': 'Employee not found'}, status=status.HTTP_404_NOT_FOUND)