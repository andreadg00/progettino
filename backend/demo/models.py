from django.db import models

class Studente(models.Model):
    nome = models.CharField(max_length=100)
    cognome = models.CharField(max_length=100)
    matricola = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return f"{self.nome} {self.cognome} ({self.matricola})"
class Esame(models.Model):
    studente = models.ForeignKey(Studente, on_delete=models.CASCADE)
    materia = models.CharField(max_length=100)
    voto = models.DecimalField(max_digits=4, decimal_places=2)
    data_esame = models.DateField()
    cfu=models.IntegerField(default=6)

    def __str__(self):
        return f"{self.materia} - {self.studente.nome} {self.studente.cognome}: {self.voto}"