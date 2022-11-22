from django.http import HttpResponse, JsonResponse
from .models import Recruitment
from .serializers import RecruitmentSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['GET', 'POST'])
def recruitment_list(request, format=None):

    if request.method == 'GET':
        recruitments = Recruitment.objects.all()
        serializer = RecruitmentSerializer(recruitments, many=True)
        return Response(serializer.data)
    
    if request.method == 'POST':
        serializer = RecruitmentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
def recruitment_detail(request, id, format=None):
    try:
        recruitment = Recruitment.objects.get(pk=id)
    except Recruitment.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = RecruitmentSerializer(recruitment)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = RecruitmentSerializer(recruitment, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        recruitment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def search(request, format = None):
    try:
        print(request.data['job'])
        recruitments = Recruitment.objects.filter(
            job=request.data['job'],
            salary = request.data['salary'],
        )
    except Exception as e:
        print(e)
        return Response(
            status=status.HTTP_204_NO_CONTENT
        )

    serializer = RecruitmentSerializer(recruitments, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def recruitments_of_company(request,idCompany, format = None):
    try:
        recruitments = Recruitment.objects.filter(
            idCompany=idCompany
        )
    except Recruitment.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = RecruitmentSerializer(recruitments, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)