from .models import Studente
from .serializers import StudenteSerializer
from rest_framework import viewsets

class StudenteViewSet(viewsets.ModelViewSet):
    queryset = Studente.objects.all()
    serializer_class = StudenteSerializer
    permission_classes=[]