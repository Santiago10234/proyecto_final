from django.contrib import admin
from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from usuarios.views import RegistroView
from autos.views import CarListCreateAPIView, CarDetailAPIView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('docs/', include_docs_urls(title = 'Api Documentation')),
    path('api/registro/',RegistroView.as_view()),
    path('api/cars/', CarListCreateAPIView.as_view(), name='car_list_create'),
]
