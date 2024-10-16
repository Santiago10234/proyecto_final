from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from rest_framework.authtoken.models import Token
from rest_framework import status
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken

User = get_user_model()  

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
        
        return Response({'success': 'Usuario creado exitosamente'}, status=status.HTTP_201_CREATED)
    
# Vista para inicio de sesión
class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        
        user = User.objects.get(email=email)
        
        # Autenticamos al usuario
        user = authenticate(request, username=user.username, password=password)
        
        if user is not None:
            refresh = RefreshToken.for_user(user)
            # Si el usuario es autenticado, devolvemos el token o éxito
            token, created = Token.objects.get_or_create(user=user)
            return Response({'id':user.id,'tokenAcc':str(refresh.access_token),'tokenRef':str(refresh)}, status=status.HTTP_200_OK)
        else:
            # Si falla la autenticación
            return Response({'error': 'Credenciales incorrectas'}, status=status.HTTP_400_BAD_REQUEST)
