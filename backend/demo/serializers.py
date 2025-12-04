from .models import Studente
from rest_framework import serializers

class StudenteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Studente
        fields = ['id', 'nome', 'cognome', 'matricola']
    