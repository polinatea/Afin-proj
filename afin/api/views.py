from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Note
from .serializers import NoteSerializer
# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    #created first view that will give us json response
    return Response('Our API')
    # add routes

@api_view(['GET'])
def getNotes(request):
    notes = Note.objects.all()
    #many = True means that we want multiple objects
    # false means one object
    serializer = NoteSerializer(notes, many = True)
    return Response(serializer.data)

@api_view(['GET'])
def getNote(request,pk):
    notes = Note.objects.get(id=pk)
    #many = True means that we want multiple objects
    # false means one object
    serializer = NoteSerializer(notes, many = False)
    return Response(serializer.data)