from django.contrib import admin
from .models import Studente, Esame 

class EsameAdmin(admin.ModelAdmin):
    list_display = ('materia', 'voto', 'cfu', 'data_esame', 'studente')
    list_filter = ('studente', 'materia')
admin.site.register(Esame, EsameAdmin)
admin.site.register(Studente)