from venv import create
from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class User(models.Model):
    username = models.ForeignKey(User, on_delete=models.CASCADE)
    email = models.EmailField(null= False, blank=False)
    gender_method = (
        (None, '선택'),
        ('0', '남성'),
        ('1', '여성')
    )
    gender = models.CharField(max_length=1, choices= gender_method, null= False, blank= False)
    birth = models.DateField(blank=True)

class Content(models.Model):
    created = models.DateTimeField(auto_now_add= True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    head_line = models.TextField(blank= False, null= False)
    main_text = models.TextField(blank= False, null= False)
