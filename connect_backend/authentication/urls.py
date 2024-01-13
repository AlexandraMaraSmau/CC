# from django.urls import path
# #from connect_backend.authentication.views import logout, login, register
# from . import views
#
# urlpatterns = [
#     path('login/', views.login, name='login'),
#     path('register/', views.register, name='register'),
#     path('logout/', views.logout, name='logout'),
# ]


from . import views
from django.urls import path
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('register/',views.RegisterView.as_view(),name="register"),
    path('login/',views.LoginAPIView.as_view(),name="login"),
    path('logout/', views.LogoutAPIView.as_view(), name="logout"),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]