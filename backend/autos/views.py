from rest_framework import generics
from .models import Car
from .serializers import CarSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status

class CarListCreateAPIView(generics.ListCreateAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    
class CarDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    
class UserCarListByIDAPIView(generics.ListAPIView):
    serializer_class = CarSerializer

    def get_queryset(self):
        user_id = self.kwargs.get('user_id') # Obtener el user_id desde los argumentos de la URL
        cars = Car.objects.filter(owner_id=user_id) # Filtrar los autos que pertenecen al usuario con ese ID

        if not cars.exists():
            return Response({'detail': 'No se encontraron publicaciones para este usuario.'}, status=status.HTTP_404_NOT_FOUND)

        return cars