from django.urls import path

from base.views import user_views as views

urlpatterns=[
    # rest framework 
    path('login', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('', views.getRoutes, name="routes"),
    path('register/', views.registerUser, name='register'),

    path('profile/', views.getUserProfile, name="users-profile"),
    path('', views.getUsers, name="users"),

  
]