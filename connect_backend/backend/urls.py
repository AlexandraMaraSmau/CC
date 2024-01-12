from django.urls import include, path

urlpatterns = [
    path('api/', include('backend.user.urls')),
    # path('/', include('activities.urls')),
    # path('/', include('conversations.urls')),
    # path('/', include('events.urls')),
    # path('/', include('messages.urls')),
    # path('/', include('reviews.urls')),
]
