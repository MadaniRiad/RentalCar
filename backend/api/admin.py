from django.contrib import admin
from .models import Client, Chauffeur, Vehicule, Reservation

@admin.register(Client)
class ClientAdmin(admin.ModelAdmin):
    list_display = ("nom_complet", "telephone", "email", "numero_permis")
    search_fields = ("nom_complet", "email", "numero_permis")
    list_filter = ("nom_complet",)

@admin.register(Chauffeur)
class ChauffeurAdmin(admin.ModelAdmin):
    list_display = ("nom", "telephone", "email", "permis_numero", "actif")
    search_fields = ("nom", "permis_numero")
    list_filter = ("actif",)

@admin.register(Vehicule)
class VehiculeAdmin(admin.ModelAdmin):
    list_display = ("marque", "modele", "immatriculation", "disponible")
    search_fields = ("marque", "modele", "immatriculation")
    list_filter = ("disponible",)

@admin.register(Reservation)
class ReservationAdmin(admin.ModelAdmin):
    list_display = ("client", "vehicule", "chauffeur", "date_heure_depart", "statut")
    search_fields = ("client__nom_complet", "chauffeur__nom", "vehicule__immatriculation")
    list_filter = ("statut", "date_heure_depart")
