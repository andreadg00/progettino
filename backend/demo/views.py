from .models import Studente, Esame
from .serializers import StudenteSerializer, EsameSerializer
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response


class StudenteViewSet(viewsets.ModelViewSet):
    queryset = Studente.objects.all()
    serializer_class = StudenteSerializer
    permission_classes=[]
    
@api_view(['GET'])
def get_esami_by_studente(request, student_id):
    esami=Esame.objects.filter(studente__id=student_id)
    serializer = EsameSerializer(esami, many=True)
    return Response(serializer.data)