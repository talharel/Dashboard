from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import UserProfile

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