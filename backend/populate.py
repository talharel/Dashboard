import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

import django
django.setup()

import random
from faker import Faker
from django.contrib.auth.models import User
from users.models import UserProfile

fake = Faker()


for i in range(100):

    username = fake.user_name()
    last_name = fake.last_name()
    email = fake.email()
    user = User.objects.create_user(username=username, last_name=last_name, email=email)


    user_profile = UserProfile.objects.create(
        user=user,
        age=random.randint(12, 90),
        gender=random.choice(['male', 'female'])
    )

print("Sample user profiles populated.")
