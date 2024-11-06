# Importación de la clase Path para manejar rutas de archivos en el sistema operativo
from pathlib import Path
# Importación de timedelta para definir tiempos y duración de tokens de autenticación
from datetime import timedelta 

# Definición del directorio base del proyecto
BASE_DIR = Path(__file__).resolve().parent.parent

# Configuraciones de seguridad y clave secreta
SECRET_KEY = 'django-insecure-1r%x!!$vz*p_wy=pbz)iip5c3^881(!5a1y5mow@rf&tp=ap_v'  # Clave secreta para criptografía en el proyecto (no debe compartirse en producción)
DEBUG = True  # Indica si el modo de depuración está activo
ALLOWED_HOSTS = ['http://localhost:5173,http://localhost,http://127.0.0.1']  # Hosts permitidos para acceder a la app

# Aplicaciones instaladas en el proyecto, incluyendo Django y otras librerías externas
INSTALLED_APPS = [
    'django.contrib.admin',  # Administrador de Django
    'django.contrib.auth',  # Sistema de autenticación de Django
    'django.contrib.contenttypes',  # Tipos de contenido
    'django.contrib.sessions',  # Gestión de sesiones
    'django.contrib.messages',  # Sistema de mensajes
    'django.contrib.staticfiles',  # Gestión de archivos estáticos
    'rest_framework',  # Django REST Framework para creación de API
    'rest_framework.authtoken',  # Autenticación por token
    'rest_framework_simplejwt',  # Autenticación con JWT
    'coreapi',  # Documentación de API con CoreAPI
    'api',  # Aplicación 'api' personalizada
    'usuarios',  # Aplicación para manejo de usuarios
    'autos',  # Aplicación para el manejo de autos
    'corsheaders',  # Permite CORS para solicitudes desde otros dominios
]

CORS_ALLOWES_ALL_ORIGINS = True  # Permitir todas las solicitudes CORS

# Configuración de middleware
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',  # Seguridad general
    'django.contrib.sessions.middleware.SessionMiddleware',  # Manejo de sesiones
    'django.middleware.common.CommonMiddleware',  # Funcionalidades generales del middleware
    'django.middleware.csrf.CsrfViewMiddleware',  # Protección CSRF
    'django.contrib.auth.middleware.AuthenticationMiddleware',  # Manejo de autenticación
    'django.contrib.messages.middleware.MessageMiddleware',  # Manejo de mensajes
    'corsheaders.middleware.CorsMiddleware',  # Permite solicitudes CORS
    'django.middleware.clickjacking.XFrameOptionsMiddleware',  # Protección contra clickjacking
]

# Configuraciones de origen para solicitudes CORS permitidas
CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
    "http://localhost",
    "http://127.0.0.1",
    "http://localhost:5174",
]
ALLOWED_HOSTS = ['127.0.0.1', 'localhost']
CORS_ALLOWED_HOSTS = [
    "http://localhost:5173",
    "http://localhost",
    "http://127.0.0.1",
    "http://localhost:5174",
]

# Configuración de rutas del proyecto
ROOT_URLCONF = 'paginaback.urls'

# Configuración de plantillas para renderizado de vistas
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',  # Backend de plantillas de Django
        'DIRS': [],  # Directorios adicionales de plantillas
        'APP_DIRS': True,  # Cargar plantillas desde directorios de las aplicaciones
        'OPTIONS': {
            'context_processors': [  # Procesadores de contexto para variables globales en plantillas
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

# Configuración de WSGI para el despliegue de la aplicación
WSGI_APPLICATION = 'paginaback.wsgi.application'

# Configuración de la base de datos utilizando MySQL
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',  # Motor de base de datos MySQL
        'NAME': 'luxury_cars_db',  # Nombre de la base de datos
        'USER': 'root',  # Usuario de la base de datos
        'PASSWORD': 'Hola1212',  # Contraseña del usuario
        'HOST': 'localhost',  # Dirección del host de la base de datos
        'PORT': '3306',  # Puerto de conexión a MySQL
    }
}

# Validadores de contraseñas para mejorar la seguridad de los usuarios
AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

# Configuración de internacionalización (idioma y zona horaria)
LANGUAGE_CODE = 'en-us'  # Código de idioma predeterminado
TIME_ZONE = 'UTC'  # Zona horaria por defecto
USE_I18N = True  # Habilita la internacionalización
USE_TZ = True  # Habilita el uso de zonas horarias

# Configuración de archivos estáticos (como CSS y JavaScript)
STATIC_URL = 'static/'  # URL para acceder a archivos estáticos

# Tipo de clave principal predeterminada para nuevos modelos
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# Configuración de Django REST Framework
REST_FRAMEWORK = {
    "DEFAULT_SCHEMA_CLASS": "rest_framework.schemas.coreapi.AutoSchema",  # Esquema de API
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',  # Clase de autenticación JWT
    ),
}

# Métodos HTTP permitidos en CORS
CORS_ALLOW_METHODS = [
    "DELETE",
    "GET",
    "OPTIONS",
    "PATCH",
    "POST",
    "PUT",
]

# Configuración de JSON Web Token (JWT) para autenticación
SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=40),  # Duración del token de acceso
    'REFRESH_TOKEN_LIFETIME': timedelta(days=1),  # Duración del token de actualización
}

# Encabezados permitidos en solicitudes CORS
CORS_ALLOW_HEADERS = [
    "accept",
    "authorization",
    "content-type",
    "x-csrftoken",
    "x-requested-with",
]
