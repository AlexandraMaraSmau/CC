# import json
# from django.http import JsonResponse
# from rest_framework_simplejwt.tokens import RefreshToken
# from django.contrib.auth import authenticate
# from backend.user.views import create_user
# from django.contrib.auth.models import User
# from django.http import HttpResponse
#
#
#
# def login (request):
#     json_data = json.loads(request.body.decode('utf-8'))
#     username = json_data.get('email')
#     password = json_data.get('password')
#     user = authenticate(username=username, password=password)
#     refresh = RefreshToken.for_user(user)
#
#     return JsonResponse ({
#         'access_token':str(refresh.access_token)
#     })
#
# def register (request):
#     create_user(request)
#
#     json_data = json.loads(request.body.decode('utf-8'))
#     username = json_data.get('email')
#     password = json_data.get('password')
#     user = authenticate(username=username, password=password)
#     refresh = RefreshToken.for_user(user)
#     return JsonResponse ({
#         'access_token':str(refresh.access_token)
#     })
#
# def logout(request):
#     return JsonResponse ({
#         'access_token': ''
#     })

from rest_framework import generics,status,views,permissions
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .serializers import RegisterSerializer,LoginSerializer,LogoutSerializer

# Create your views here.

class RegisterView(generics.GenericAPIView):
    serializer_class = RegisterSerializer
    def post(self,request):
        user=request.data
        serializer = self.serializer_class(data=user)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        user_data = serializer.data
        return Response(user_data, status=status.HTTP_201_CREATED)

class LoginAPIView(generics.GenericAPIView):
    serializer_class = LoginSerializer
    def post(self,request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data,status=status.HTTP_200_OK)

class LogoutAPIView(generics.GenericAPIView):
    serializer_class = LogoutSerializer
    permission_classes = (permissions.IsAuthenticated,)
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(status=status.HTTP_204_NO_CONTENT)