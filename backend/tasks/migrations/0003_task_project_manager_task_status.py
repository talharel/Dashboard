# Generated by Django 5.0.6 on 2024-06-22 13:40

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employees', '0005_employee_age'),
        ('tasks', '0002_task_creation_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='project_manager',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='managed_tasks', to='employees.employee'),
        ),
        migrations.AddField(
            model_name='task',
            name='status',
            field=models.CharField(choices=[('complete', 'Complete'), ('incomplete', 'Incomplete')], max_length=10, null=True),
        ),
    ]