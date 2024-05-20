from django.db import models
from django.contrib.auth.models import User


class UserProfile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE,default=None)
    gender = models.CharField(max_length=6, choices=(('male', 'Male'), ('female', 'Female')),blank=False,default='male')
    age = models.PositiveIntegerField(blank=False)


    def __str__(self):
          return self.user.username

