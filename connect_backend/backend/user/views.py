import json
from ..models import User
from ..serializers import UserSerializer

from django.shortcuts import get_object_or_404
from django.http import HttpResponse, Http404, HttpResponseNotAllowed
from django.core import serializers

def create_user(request):
    json_data = json.loads(request.body.decode('utf-8'))
    user = User.objects.create(**json_data)
    user.save()
    return HttpResponse(status=201)

def get_user_by_id(request, user_id):

    try:
        query_set = User.objects.filter(pk=user_id)
    except User.DoesNotExist:
        raise Http404("User does not exist")
    data = serializers.serialize("json", query_set)
    return HttpResponse(data)

def get_all_users(request):
    query_set = User.objects.all()
    data = serializers.serialize("json", query_set)
    return HttpResponse(data)

def update_user_by_id(request, user_id):
    user = get_object_or_404(User, id=user_id)
    data = json.loads(request.body)

    serializer = UserSerializer(user, data=data)
    serializer.save()
    return HttpResponse(status=200)

def delete_user_by_id(request, user_id):
    if request.method == 'DELETE':
        try:
            user = User.objects.get(pk=user_id)
        except User.DoesNotExist:
            raise Http404("User does not exist")
        
        user.delete()
        return HttpResponse(status=200)
    else:
        raise HttpResponseNotAllowed("Method is not supported")