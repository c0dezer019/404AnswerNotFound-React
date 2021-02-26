from django.db import models

# Create your models here.


class User(models.Model):
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=99)
    email = models.EmailField()
    age = models.SmallIntegerField()
    industry = models.CharField(max_length=40)
    career = models.CharField(max_length=40)
    short_bio = models.CharField(max_length=100)
    long_bio = models.CharField(max_length=1000)
    profile_image = models.ImageField(height_field=200, width_field=200)
    merit_points = models.SmallIntegerField()
