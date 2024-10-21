from rest_framework import generics
from .models import Car
from .serializers import CarSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view


@api_view(['GET'])
def search_cars(request, brand):
    brand = brand.lower()  # Convertir el parámetro de la URL a minúsculas
    cars = Car.objects.filter(brand__iexact=brand)  # Filtrar autos por marca, ignorando mayúsculas/minúsculas
    serializer = CarSerializer(cars, many=True)
    return Response(serializer.data)


class CarListCreateAPIView(generics.ListCreateAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    
    
    
class CarDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    permission_classes = [IsAuthenticated]
    
    
class UserCarListByIDAPIView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = CarSerializer
    def get_queryset(self):
        user_id = self.kwargs.get('user_id') # Obtener el user_id desde los argumentos de la URL
        cars = Car.objects.filter(owner_id=user_id) # Filtrar los autos que pertenecen al usuario con ese ID

        if not cars.exists():
            return Response({'detail': 'No se encontraron publicaciones para este usuario.'}, status=status.HTTP_404_NOT_FOUND)

        return cars