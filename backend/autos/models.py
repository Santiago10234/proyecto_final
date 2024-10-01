from django.db import models

class Car(models.Model):
    TRANSMISSION_CHOICES = [
        ('manual', 'Manual'),
        ('automatic', 'Automática'),
        ('semi-automatic', 'Semi-Automática'),
    ]
    
    brand = models.CharField(max_length=50)  # Marca del auto
    model = models.CharField(max_length=50)  # Modelo del auto
    year = models.PositiveIntegerField()  # Año de fabricación
    mileage = models.PositiveIntegerField()  # Kilometraje
    transmission = models.CharField(max_length=20, choices=TRANSMISSION_CHOICES)  # Tipo de transmisión
    car_image = models.ImageField(upload_to='car_images/')  # Imagen del auto
   
    def __str__(self):
        return f'{self.brand} {self.model} ({self.year})'
