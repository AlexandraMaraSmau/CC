import json
from ..models import Conversation

from django.shortcuts import get_object_or_404
from django.http import HttpResponse, Http404, HttpResponseNotAllowed
from django.core import serializers

def create_conversation(request):
    json_data = json.loads(request.body.decode('utf-8'))
    conversation = Conversation.objects.create(**json_data)
    conversation.save()
    return HttpResponse(status=201)

def get_conversation_by_id(request, conversation_id):
    try:
        query_set = Conversation.objects.filter(pk=conversation_id)
    except Conversation.DoesNotExist:
        raise Http404("Conversation does not exist")
    data = serializers.serialize("json", query_set)
    return HttpResponse(data, status=200)

def get_all_conversations(request):
    query_set = Conversation.objects.all()
    data = serializers.serialize("json", query_set)
    return HttpResponse(data, status=200)

def update_conversation_by_id(request, conversation_id):
    conversation = get_object_or_404(Conversation, id=conversation_id)

    try:
        data = json.loads(request.body)
    except json.JSONDecodeError:
        return HttpResponse(status=400)

    for key, value in data.items():
        setattr(conversation, key, value)

    conversation.save()

    return HttpResponse(status=200)

def delete_conversation_by_id(request, conversation_id):
    if request.method == 'DELETE':
        try:
            conversation = Conversation.objects.get(pk=conversation_id)
        except Conversation.DoesNotExist:
            raise Http404("Conversation does not exist")

        conversation.delete()
        return HttpResponse(status=200)
    else:
        raise HttpResponseNotAllowed("Method is not supported")