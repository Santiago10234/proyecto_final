from rest_framework import serializers
from .models import Car, TestDrive

# Serializador para el modelo Car, el cual serializa todos los campos del modelo.
class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car# Se define el modelo Car como referencia para el serializador.
        fields = "__all__"  # Se especifica que todos los campos del modelo serán serializados.

# Serializador para el modelo TestDrive, el cual serializa todos los campos del modelo.
class TestDriveSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestDrive # Se define el modelo TestDrive como referencia para el serializador.
        fields = "__all__" # Se especifica que todos los campos del modelo serán serializados.