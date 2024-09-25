from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from rest_framework.authtoken.models import Token
from rest_framework import status

User = get_user_model()  # Para obtener el modelo personalizado de usuario

class RegistroView(APIView):
    def post(self, request):
        username = request.data.get('username')
        email = request.data.get('email')
        first_name = request.data.get('first_name')
        last_name = request.data.get('last_name')
        password = request.data.get('password')
        
        # Validaciones
        if not email or not first_name or not last_name or not password:
            return Response({'error': 'Todos los campos son obligatorios'}, status=status.HTTP_400_BAD_REQUEST)
        
        if len(password) < 8:
            return Response({'error': 'La contraseña debe tener al menos 8 caracteres'}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(email=email).exists():
            return Response({'error': 'El correo electrónico ya está registrado'}, status=status.HTTP_400_BAD_REQUEST)
        
        # Crear usuario
        nuevo_usuario = User.objects.create_user(username=username,email=email, first_name=first_name, last_name=last_name, password=password)
        Token.objects.create(user=nuevo_usuario)  # Crear token de autenticación para el usuario
        
        return Response({'success': 'Usuario creado exitosamente'}, status=status.HTTP_201_CREATED)
