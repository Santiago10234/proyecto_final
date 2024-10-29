from rest_framework import generics
from .models import Car, TestDrive
from .serializers import CarSerializer, TestDriveSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view


# Vista para buscar autos por marca, ignorando mayúsculas y minúsculas.
@api_view(['GET'])
def search_cars(request, brand):
    brand = brand.lower()  # Convertir el parámetro de la URL a minúsculas
    cars = Car.objects.filter(brand__iexact=brand)  # Filtrar autos por marca, ignorando mayúsculas/minúsculas
    serializer = CarSerializer(cars, many=True)  # Serializar los resultados.
    return Response(serializer.data)  # Retornar los datos en formato JSON.

# Vista para listar y crear autos.
class CarListCreateAPIView(generics.ListCreateAPIView):
    queryset = Car.objects.all()  # Consulta para obtener todos los autos.
    serializer_class = CarSerializer  # Serializador para manejar datos de autos.
    
    

# Vista para obtener, actualizar o eliminar un auto específico.
class CarDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Car.objects.all()  # Consulta para obtener todos los autos.
    serializer_class = CarSerializer  # Serializador para manejar datos de autos.
    permission_classes = [IsAuthenticated]  # Permite acceso solo a usuarios autenticados.
    
# Vista para listar los autos de un usuario específico mediante su ID.
class UserCarListByIDAPIView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]  # Permite acceso solo a usuarios autenticados.
    serializer_class = CarSerializer  # Serializador para manejar datos de autos.
    def get_queryset(self):
        user_id = self.kwargs.get('user_id') # Obtener el user_id desde los argumentos de la URL
        cars = Car.objects.filter(owner_id=user_id) # Filtrar los autos que pertenecen al usuario con ese ID
        # Verifica si no hay autos y retorna un mensaje de error.
        if not cars.exists():
            return Response({'detail': 'No se encontraron publicaciones para este usuario.'}, status=status.HTTP_404_NOT_FOUND)

        return cars # Retorna el queryset con los autos del usuario.
    
# Vista para listar y crear solicitudes de prueba de manejo.
class TestDriveView(generics.ListCreateAPIView):
    queryset = TestDrive.objects.all() # Consulta para obtener todas las solicitudes de prueba de manejo.
    serializer_class = TestDriveSerializer # Serializador para manejar datos de prueba de manejo.