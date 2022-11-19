from django.http import HttpResponse, JsonResponse
from .models import Account
from .serializers import AccountSerializer
from .models import Recruitment
from .serializers import RecruitmentSerializer
from .models import CV
from .serializers import CVSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status