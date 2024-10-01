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
    car_image = models.ImageField(upload_to='car_images/') 
   
    def __str__(self):
        return f'{self.brand} {self.model} ({self.year})'
