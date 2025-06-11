from .models import Vehicule
from .models import Client, Chauffeur, Vehicule, Reservation
from rest_framework import serializers

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = '__all__'

class ChauffeurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chauffeur
        fields = '__all__'

class VehiculeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehicule
        fields = ['id', 'marque', 'modele', 'immatriculation', 'disponible', 'image']


class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = '__all__'

