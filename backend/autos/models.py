from django.conf import settings
from django.contrib.auth.models import User
from django.db import models

# Modelo para representar un automóvil en el sistema.
class Car(models.Model):
     # Opciones de transmisión del automóvil.
    TRANSMISSION_CHOICES = [
        ('manual', 'Manual'),
        ('automatic', 'Automática'),
        ('semi-automatic', 'Semi-Automática'),
    ]
    # Campos de información básica del automóvil.
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
    # Representación en texto de la instancia del automóvil.
    def __str__(self):
        return f'{self.brand} {self.model} ({self.year})'
# Modelo para representar una solicitud de prueba de manejo.
class TestDrive(models.Model):
    userDrive = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)  # Usuario que solicita la prueba de manejo.
    car = models.ForeignKey(Car,on_delete=models.CASCADE) # Automóvil al cual se solicita la prueba.
    date = models.DateTimeField()  # Fecha y hora solicitada para la prueba de manejo.
    
        