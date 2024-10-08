from django.conf import settings
from django.contrib.auth.models import User
from django.db import models

class Car(models.Model):
    TRANSMISSION_CHOICES = [
        ('manual', 'Manual'),
        ('automatic', 'Automática'),
        ('semi-automatic', 'Semi-Automática'),
    ]

    brand = models.CharField(max_length=50)
    model = models.CharField(max_length=50)
    year = models.PositiveIntegerField()
    mileage = models.PositiveIntegerField()
    transmission = models.CharField(max_length=20, choices=TRANSMISSION_CHOICES)
    car_image = models.TextField(blank=True, null=True)
    price = models.FloatField(blank=True, null=True)
    num_tel = models.TextField(blank=True, null=True)

    # Relación con el usuario
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,default=1)

    def __str__(self):
        return f'{self.brand} {self.model} ({self.year})'
