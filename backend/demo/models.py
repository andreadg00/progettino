from django.db import models

class Studente(models.Model):
    nome = models.CharField(max_length=100)
    cognome = models.CharField(max_length=100)
    matricola = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return f"{self.nome} {self.cognome} ({self.matricola})"