import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

import django
django.setup()

import random
from faker import Faker
from django.contrib.auth.models import User
from users.models import UserProfile
from tasks.models import Task
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

if Employee.objects.count() == 0:

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

tasks_for_positions = {
    'Software Developer': [
        'Implement authentication module',
        'Refactor codebase for performance',
        'Develop new features for mobile app',
    ],
    'Data Scientist': [
        'Analyze sales data trends',
        'Build predictive models for customer behavior',
        'Perform A/B testing on website',
    ],
    'System Administrator': [
        'Upgrade server hardware',
        'Implement new backup solution',
        'Monitor network performance',
    ],
    'Network Engineer': [
        'Configure new routers and switches',
        'Optimize network for VoIP traffic',
        'Implement network security measures',
    ],
    'Accountant': [
        'Prepare monthly financial statements',
        'Reconcile bank accounts',
        'Assist in annual budget preparation',
    ],
    'Economist': [
        'Conduct market research analysis',
        'Prepare economic forecasts',
        'Analyze policy impacts on economy',
    ],
    'Investment Banker': [
        'Prepare IPO documentation',
        'Analyze financial models',
        'Conduct market valuation studies',
    ],
    'Business Analyst': [
        'Document business requirements',
        'Analyze business processes',
        'Prepare feasibility reports',
    ],
    'DevOps Engineer': [
        'Automate deployment processes',
        'Monitor and optimize CI/CD pipelines',
        'Ensure infrastructure scalability',
    ],
    'UI/UX Designer': [
        'Design user interfaces for web app',
        'Conduct user experience research',
        'Create wireframes and prototypes',
    ],
}

if Task.objects.count() == 0:
    all_tasks = [(position, task) for position in tasks_for_positions for task in tasks_for_positions[position]]
    selected_tasks = random.sample(all_tasks, 20)

    for position, base_title in selected_tasks:
        title = base_title
        description = f"{base_title}. {fake.text(max_nb_chars=150)}"
        assigned_employees = random.sample(list(Employee.objects.all()), random.randint(1, 5))
        creation_date = fake.date_between(start_date='-1y', end_date='today')

        status = random.choice(['complete', 'uncompleted'])
        project_manager = random.choice(assigned_employees)

        task = Task.objects.create(
            title=title,
            description=description,
            creation_date=creation_date,
            status=status,
            project_manager=project_manager
        )
        task.employees.set(assigned_employees)
        task.save()

    print("Sample tasks populated.")
