from django.shortcuts import render, get_object_or_404, redirect
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from .models import Car
from .forms import CarForm  # Asegúrate de crear este formulario en forms.py

# Vista para listar todos los autos
class CarListView(ListView):
    model = Car
    template_name = 'cars/car_list.html'
    context_object_name = 'cars'

# Vista para ver el detalle de un auto
class CarDetailView(DetailView):
    model = Car
    template_name = 'cars/car_detail.html'
    context_object_name = 'car'

# Vista para crear un nuevo auto
class CarCreateView(CreateView):
    model = Car
    form_class = CarForm
    template_name = 'cars/car_form.html'
    success_url = reverse_lazy('car_list')

# Vista para actualizar un auto existente
class CarUpdateView(UpdateView):
    model = Car
    form_class = CarForm
    template_name = 'cars/car_form.html'
    success_url = reverse_lazy('car_list')

# Vista para eliminar un auto
class CarDeleteView(DeleteView):
    model = Car
    template_name = 'cars/car_confirm_delete.html'
    success_url = reverse_lazy('car_list')

