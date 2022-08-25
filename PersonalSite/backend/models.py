from venv import create
from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Real_User(models.Model):
    username = models.ForeignKey(User, on_delete=models.CASCADE)
    email = models.EmailField(null= False, blank=False)
    gender_method = (
        ('0', '남성'),
        ('1', '여성')
    )
    gender = models.CharField(max_length=1, choices= gender_method, blank= True)
    birth = models.DateField(blank=True)

class Content(models.Model):
    created = models.DateTimeField(auto_now_add= True)
    # author = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length= 100, blank= False, help_text="제목을 입력하세요.")
    main_text = models.TextField()

    class Meta:
        ordering = ['created']