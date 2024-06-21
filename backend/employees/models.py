from django.db import models
import datetime

class Employee(models.Model):
    first_name = models.CharField(max_length=40)
    last_name = models.CharField(max_length=40)
    email = models.EmailField(max_length=40,unique=True,null=True,blank=False)
    age = models.PositiveIntegerField(null=True,blank=False)
    position = models.CharField(max_length=40)
    hire_date = models.DateField(default=datetime.date.today)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
