from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializer import TaskSerializer
from .models import Task
from employees.serializer import EmployeeSerializer
from employees.models import Employee

@api_view(['POST'])
def create_task(request):
    serializer = TaskSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_tasks(request):
    completed_tasks = Task.objects.filter(status='complete')
    uncompleted_tasks = Task.objects.filter(status='uncompleted')
    tasks = Task.objects.all()
    if tasks.exists():
        serializer = TaskSerializer(tasks, many=True)
        response_data = {
                'count': tasks.count(),
                'completed_tasks_size': completed_tasks.count(),
                'uncompleted_tasks_size': uncompleted_tasks.count(),
                'tasks': serializer.data
            }
        return Response(response_data,status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def get_task_by_id(request,id):
    try:
        task = Task.objects.get(id=id)
    except Task.DoesNotExist:
        return Response({'error': 'Task not found'}, status=status.HTTP_404_NOT_FOUND)
    serializer = TaskSerializer(task)
    return Response(serializer.data)



@api_view(['DELETE'])
def delete_task(request, id):
    try:
        task = Task.objects.get(id=id)
        task.delete()
        return Response({'message': 'Task deleted successfully'}, status=status.HTTP_200_OK)
    except Task.DoesNotExist:
        return Response({'error': 'Task not found'}, status=status.HTTP_404_NOT_FOUND)



@api_view(['GET'])
def get_employees_of_task(request,id):
    try:
        task = Task.objects.get(id=id)
        employees = task.employees.all()
        serializer = EmployeeSerializer(employees,many=True)
        return Response(serializer.data,status.HTTP_200_OK)
    except Task.DoesNotExist:
        return Response({'error': 'Task not found'}, status=status.HTTP_404_NOT_FOUND)


@api_view(['POST'])
def add_employee_for_task(request):
    try:
        task = Task.objects.get(id=request.data.get('task_id'))
        employee = Employee.objects.get(id=request.data.get('employee_id'))
        task.employees.add(employee)
        task.save()
        serializer = TaskSerializer(task)
        return Response(serializer.data, status=status.HTTP_200_OK)
        
    except Task.DoesNotExist:
        return Response({'error': 'Task not found'}, status=status.HTTP_404_NOT_FOUND)

    except Employee.DoesNotExist:
        return Response({'error': 'Employee not found'}, status=status.HTTP_404_NOT_FOUND)

    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
    


        
