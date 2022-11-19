"""rest_api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from rest_api import views
from rest_api import account_views
from rest_api import recruitment_views
from rest_api import cv_views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('admin/', admin.site.urls),
    path('sign-up/', account_views.sign_up),
    path('sign-in/', account_views.sign_in),
    path('accounts/', account_views.account_list),
    path('accounts/<int:id>', account_views.account_detail),
    path('recruitments/', recruitment_views.recruitment_list),
    path('recruitments/<int:id>', recruitment_views.recruitment_detail),
    path('search/', recruitment_views.search),
    path('cvs', cv_views.cv_list),
    path('cvs/<int:id>', cv_views.cv_detail),
    path('get-cv/<int:id>', cv_views.cv_getfile),
]

urlpatterns = format_suffix_patterns(urlpatterns)