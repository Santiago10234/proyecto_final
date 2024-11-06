from django.contrib import admin
from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from usuarios.views import RegistroView, LoginView
from autos.views import CarListCreateAPIView, TestDriveView, UserCarListByIDAPIView, CarDetailAPIView,search_cars
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
urlpatterns = [
    # Ruta para acceder al panel de administración de Django
    path('admin/', admin.site.urls),
    
    # Ruta principal de la API, incluye todas las rutas definidas en api.urls
    path('api/', include('api.urls')),
    
    # Ruta para la documentación de la API, utilizando la vista de documentación de Django
    path('docs/', include_docs_urls(title='Api Documentation')),
    
    # Ruta para el registro de usuarios, usa la vista personalizada RegistroView
    path('api/registro/', RegistroView.as_view()),
    
    # Ruta para el inicio de sesión de usuarios, usa la vista personalizada LoginView
    path('api/login/', LoginView.as_view()),
    
    # Ruta para la lista y creación de autos, usa la vista CarListCreateAPIView
    path('api/cars/', CarListCreateAPIView.as_view(), name='car_list_create'),
    
    # Ruta para obtener la lista de autos publicados por un usuario específico, usando su ID
    path('user/cars/<int:user_id>', UserCarListByIDAPIView.as_view(), name='user-car-list-by-id'),
    
    # Ruta para obtener el detalle, actualizar o eliminar un auto específico por su ID
    path('api/cars/<int:pk>/', CarDetailAPIView.as_view(), name='car_detail'),
    
    # Ruta para listar autos por marca, utilizando la función de vista search_cars
    path('api/cars/search/<str:brand>/', search_cars, name='search_cars'),
    
    # Ruta para refrescar el token de autenticación, utilizando TokenRefreshView
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    # Ruta para programar una prueba de manejo, usando la vista TestDriveView
    path('api/cars/testDrive', TestDriveView.as_view(), name='testDrive'),
]
