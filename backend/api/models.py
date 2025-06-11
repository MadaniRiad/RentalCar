from django.db import models

class Client(models.Model):
    nom_complet = models.CharField(max_length=150, null=False, blank=False)
    telephone = models.CharField(max_length=20, null=False, blank=False)
    email = models.EmailField(blank=True, null=True)
    numero_permis = models.CharField(max_length=50, null=False, blank=False)

    def __str__(self):
        return self.nom_complet


class Chauffeur(models.Model):
    nom = models.CharField(max_length=100, null=False, blank=False)
    telephone = models.CharField(max_length=20, null=False, blank=False)
    email = models.EmailField(blank=True, null=True)
    permis_numero = models.CharField(max_length=50, null=False, blank=False)
    actif = models.BooleanField(default=True)

    def __str__(self):
        return self.nom

class Vehicule(models.Model):
    marque = models.CharField(max_length=100)
    modele = models.CharField(max_length=100)
    immatriculation = models.CharField(max_length=100, unique=True)
    disponible = models.BooleanField(default=True)

    image = models.ImageField(upload_to='vehicules/', blank=True, null=True)

    def __str__(self):
        return f"{self.marque} {self.modele} - {self.immatriculation}"



class Reservation(models.Model):
    STATUT_CHOICES = [
        ('en_attente', 'En attente'),
        ('confirmee', 'Confirmée'),
        ('annulee', 'Annulée'),
        ('terminee', 'Terminée'),
    ]

    client = models.ForeignKey(Client, on_delete=models.CASCADE)
    chauffeur = models.ForeignKey(Chauffeur, on_delete=models.SET_NULL, null=True, blank=True)
    vehicule = models.ForeignKey(Vehicule, on_delete=models.SET_NULL, null=True, blank=True)
    date_heure_depart = models.DateTimeField()
    lieu_depart = models.CharField(max_length=200)
    lieu_arrivee = models.CharField(max_length=200)
    statut = models.CharField(max_length=20, choices=STATUT_CHOICES, default='en_attente')

    def __str__(self):
        return f"Réservation #{self.id} - {self.client.nom_complet} le {self.date_heure_depart.strftime('%d/%m/%Y %H:%M')}"
