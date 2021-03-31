from django.shortcuts import render
from django.contrib.auth.models import User
from django.http import Http404

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics

from .api.serializers import UserSerializer

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


# Create your views here.
