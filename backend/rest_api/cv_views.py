from django.http import HttpResponse, JsonResponse, FileResponse
from .models import CV
from .serializers import CVSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import io, zipfile
from django.http import HttpResponse
from os.path import basename

@api_view(['GET', 'POST'])
def cv_list(request, format=None):

    if request.method == 'GET':
        cvs = CV.objects.all()
        serializer = CVSerializer(cvs, many=True)
        return Response(serializer.data)
    
    if request.method == 'POST':
        serializer = CVSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'DELETE'])
def cv_detail(request, id, format=None):
    try:
        cv = CV.objects.get(pk=id)
    except CV.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = CVSerializer(cv)
        return Response(serializer.data)
    elif request.method == 'DELETE':
        cv.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def cv_getfile(request, id, format=None):
    try:
        cv = CV.objects.get(pk=id)
    except CV.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    # try:    
    #     buffer = io.BytesIO()
    #     zip_file = zipfile.ZipFile(buffer, 'w', zipfile.ZIP_DEFLATED)
    #     path_cv = cv.file.path
    #     print(path_cv)
    #     zip_file.write(path_cv, basename(path_cv))
    #     zip_file.close()
    #     response = HttpResponse(buffer.getvalue())
    #     response['Content-Disposition'] = 'attachment; filename=all-cv.zip'
    #     return response
    # except IOError:
    #     return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = CVSerializer(cv)
    return Response(serializer.data)

@api_view(['GET'])
def cv_of_recruitment(request, idRecruitment, format=None):
    try:
        cvs = CV.objects.filter(
            idRecruitment=idRecruitment
        )
    except CV.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    # try:    
    #     buffer = io.BytesIO()
    #     zip_file = zipfile.ZipFile(buffer, 'w', zipfile.ZIP_DEFLATED)
    #     for cv in cvs:
    #         path_cv = cv.file.path
    #         print(path_cv)
    #         zip_file.write(path_cv, basename(path_cv))
    #     zip_file.close()
    #     response = HttpResponse(buffer.getvalue())
    #     response['Content-Disposition'] = 'attachment; filename=all-cv.zip'
    #     return response
    # except IOError:
    #     return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = CVSerializer(cvs, many=True)
    return Response(serializer.data)