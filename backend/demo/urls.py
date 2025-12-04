from django.urls import path
from .views import StudenteViewSet
urlpatterns = [
    path('studente/all', StudenteViewSet.as_view({'get': 'list'})),
    path('studente/get/<int:pk>/', StudenteViewSet.as_view({'get': 'retrieve'})),
    path('studente/add', StudenteViewSet.as_view({'post': 'create'})),
]