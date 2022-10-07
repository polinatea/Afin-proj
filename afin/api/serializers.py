from dataclasses import field
from rest_framework.serializers import ModelSerializer
from .models import Note

# serialize every single attribute in model Note 
class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'