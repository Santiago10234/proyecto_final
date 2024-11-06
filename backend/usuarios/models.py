# Importa los modelos de usuario base de Django y el administrador de usuarios
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.utils import timezone

# Manager para gestionar el modelo personalizado de usuario
class CustomUserManager(BaseUserManager):
    # Método para crear un usuario regular
    def create_user(self, email, password=None, **extra_fields):
        # Verifica que el email sea proporcionado
        if not email:
            raise ValueError("El correo electrónico es obligatorio")
        # Normaliza el email para mantener consistencia
        email = self.normalize_email(email)
        # Crea un nuevo usuario con el email y campos adicionales
        user = self.model(email=email, **extra_fields)
        # Establece la contraseña del usuario
        user.set_password(password)
        # Guarda el usuario en la base de datos
        user.save(using=self._db)
        return user

    # Método para crear un superusuario con permisos especiales
    def create_superuser(self, email, password=None, **extra_fields):
        # Configura los campos necesarios para que sea un superusuario
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(email, password, **extra_fields)

# Modelo personalizado de usuario
class User(AbstractBaseUser, PermissionsMixin):
    # Email del usuario, debe ser único y tiene un tamaño máximo de 255 caracteres
    email = models.EmailField(unique=True, max_length=255)
    # Nombre y apellido del usuario
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    # Estado activo del usuario (habilitado o no)
    is_active = models.BooleanField(default=True)
    # Define si el usuario tiene acceso al panel de administración
    is_staff = models.BooleanField(default=False)
    # Fecha en la que el usuario se registró
    date_joined = models.DateTimeField(default=timezone.now)

    # Relación con grupos, usando un nombre relacionado personalizado
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='custom_user_set',  # Cambia el nombre según sea necesario
        blank=True
    )
    # Relación con permisos, usando un nombre relacionado personalizado
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='custom_user_permissions_set',  # Cambia el nombre según sea necesario
        blank=True
    )

    # Define el administrador personalizado para el modelo de usuario
    objects = CustomUserManager()

    # Campo usado como identificador único para autenticación
    USERNAME_FIELD = 'email'
    # Campos adicionales obligatorios para crear un usuario
    REQUIRED_FIELDS = ['first_name', 'last_name']

    # Representación en texto del usuario, mostrando su primer nombre
    def __str__(self):
        return self.first_name
