import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

import django
django.setup()

import random
from faker import Faker
from django.contrib.auth.models import User
from users.models import UserProfile
from employees.models import Employee

fake = Faker()

if UserProfile.objects.count() == 0:
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

if Employee.objects.count() == 0:

    positions = [
    'Software Developer',
    'Data Scientist',
    'System Administrator',
    'Network Engineer',
    'Accountant',
    'Economist',
    'Investment Banker',
    'Business Analyst',
    'DevOps Engineer',
    'UI/UX Designer',
    ]

    for i in range(40):
        first_name = fake.first_name()
        last_name = fake.last_name()
        email = fake.email()
        age = random.randint(18, 65)
        position = random.choice(positions)
        hire_date = fake.date_between(start_date='-10y', end_date='today')

        employee = Employee.objects.create(
            first_name=first_name,
            last_name=last_name,
            email=email,
            age=age,
            position=position,
            hire_date=hire_date
        )

    print("Sample employees populated.")
