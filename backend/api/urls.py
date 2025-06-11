from django.urls import path, include
from .views import ClientViewSet, ChauffeurViewSet, VehiculeViewSet, ReservationViewSet
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register(r'clients', ClientViewSet)
router.register(r'chauffeurs', ChauffeurViewSet)
router.register(r'vehicules', VehiculeViewSet)
router.register(r'reservations', ReservationViewSet)

urlpatterns = [
    path('', include(router.urls)),
     
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)