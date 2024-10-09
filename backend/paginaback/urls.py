from django.contrib import admin
from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from usuarios.views import RegistroView, LoginView
from autos.views import CarListCreateAPIView, UserCarListByIDAPIView, CarDetailAPIView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('docs/', include_docs_urls(title = 'Api Documentation')),
    path('api/registro/',RegistroView.as_view()),
    path('api/login/', LoginView.as_view()),
    path('api/cars/', CarListCreateAPIView.as_view(), name='car_list_create'),
    path('user/cars/<int:user_id>', UserCarListByIDAPIView.as_view(), name='user-car-list-by-id'),
    path('api/cars/<int:pk>/', CarDetailAPIView.as_view(), name='car_detail'),  # Ruta para detalle, actualización y eliminación
]
