from django.urls import include, path

urlpatterns = [
    path('/', include('users.urls')),
    path('/', include('activities.urls')),
    path('/', include('conversations.urls')),
    path('/', include('events.urls')),
    path('/', include('messages.urls')),
    path('/', include('reviews.urls')),
]
