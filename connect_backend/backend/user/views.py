import json
from ..models import User

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
    return HttpResponse(data, status=200)

def get_all_users(request):
    query_set = User.objects.all()
    data = serializers.serialize("json", query_set)
    return HttpResponse(data, status=200)

def update_user_by_id(request, user_id):
    user = get_object_or_404(User, id=user_id)

    try:
        data = json.loads(request.body)
    except json.JSONDecodeError:
        return HttpResponse(status=400)

    for key, value in data.items():
        setattr(user, key, value)

    user.save()

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