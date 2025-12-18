from django.urls import path
from .views import StudenteViewSet
from . import views
urlpatterns = [
    path('studente/all/', StudenteViewSet.as_view({'get': 'list'})),
    path('studente/get/<int:pk>/', StudenteViewSet.as_view({'get': 'retrieve'})),
    path('studente/add/', StudenteViewSet.as_view({'post': 'create'})),
    path('esami/studente/<int:student_id>/', views.get_esami_by_studente),
]