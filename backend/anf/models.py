from django.db import models
from string import Template


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
    joined_date = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.username


class Question(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    question_text = models.TextField()

    def __str__(self):
        t = Template('$user\'s Question')
        return t.substitute(user=self.user)
