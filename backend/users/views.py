from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import UserProfile
from django.db.models import Count,Max,Min

@api_view(['GET'])
def get_gender(request):
    try:
        male_count = UserProfile.objects.filter(gender='male').count()
        female_count = UserProfile.objects.filter(gender='female').count()
        gender_data = {
            'male': male_count,
            'female': female_count
        }
        return Response(gender_data)
    except Exception as e:
        return Response({'error': 'An error occurred while fetching gender data'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
def get_groups_of_ages(request, gap=20):
    try:
        gap = int(gap)
        if gap <= 0:
            return Response({'error': 'Gap must be a positive integer'})

        age_groups = {}
        min_age = UserProfile.objects.aggregate(min_age=Min('age'))['min_age']
        max_age = UserProfile.objects.aggregate(max_age=Max('age'))['max_age']

        for start_age in range(min_age, max_age + 1, gap):
            end_age = start_age + gap
            count = UserProfile.objects.filter(age__gte=start_age, age__lt=end_age).count()
            age_groups[f"{start_age}-{end_age}"] = count

        return Response(age_groups)
    
    except Exception as e:
        return Response({'error': 'An error occurred while fetching gender data'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
    
    
