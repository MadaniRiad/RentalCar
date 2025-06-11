from rest_framework import viewsets
from .models import Client, Chauffeur, Vehicule, Reservation
from .serializers import ClientSerializer, ChauffeurSerializer, VehiculeSerializer, ReservationSerializer

class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer

class ChauffeurViewSet(viewsets.ModelViewSet):
    queryset = Chauffeur.objects.all()
    serializer_class = ChauffeurSerializer

class VehiculeViewSet(viewsets.ModelViewSet):
    queryset = Vehicule.objects.all()
    serializer_class = VehiculeSerializer

class ReservationViewSet(viewsets.ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer

