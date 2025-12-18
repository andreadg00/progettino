from .models import Studente
from rest_framework import serializers
from .models import Esame

class StudenteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Studente
        fields = ['id', 'nome', 'cognome', 'matricola']
class EsameSerializer(serializers.ModelSerializer):
        class Meta:
            model = Esame
            fields = ['id', 'materia', 'data_esame', 'voto', 'cfu']
    