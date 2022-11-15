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

@api_view(['POST'])
def sign_up(request, format=None):
    try:
        Account.objects.get(
            username=request.data['username']
        )
        print('username existed')
        return Response(
            'Username Existed', 
            status=status.HTTP_203_NON_AUTHORITATIVE_INFORMATION
        )
    except:
        pass

    if request.data['role'] == 'company':
        request.data['isCompany'] = True
    elif request.data['role'] == 'employee':
        request.data['isEmployee'] = True
    else:
        return Response(
            'You Should Pick Your Role', 
            status=status.HTTP_203_NON_AUTHORITATIVE_INFORMATION
        )

    if request.data['address'] == '':
        return Response(
            'You should provide your address',
            status = status.HTTP_203_NON_AUTHORITATIVE_INFORMATION,
        )

    if request.data['phonenumber'] == '':
        return Response(
            'You should provide your phone number',
            status = status.HTTP_203_NON_AUTHORITATIVE_INFORMATION,
        )
    else:
        request.data['phone'] = request.data['phonenumber']
        
    serializer = AccountSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        account = Account.objects.get(
            username=request.data['username']
        )
        data = {
            'name': account.name,
            'email': account.email,
            'phonenumber': account.phoneNumber,
            'address': account.address,
        }
        return Response(
            data,
            status=status.HTTP_201_CREATED
        )
    return Response('Error', status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def sign_in(request, format=None):
    print(request.data)
    try:
        account = Account.objects.get(
            username=request.data['username']
        )
    except:
        return Response(
            'Username Not Found', 
            status=status.HTTP_203_NON_AUTHORITATIVE_INFORMATION
        )
    if account.password != request.data['password']:
        return Response(
            'Wrong Password',
            status=status.HTTP_203_NON_AUTHORITATIVE_INFORMATION
        )
    data = {
        'name': account.name,
        'email': account.email,
        'phonenumber': account.phoneNumber,
        'address': account.address,
    }
    return Response(data, status=status.HTTP_200_OK)

@api_view(['GET'])
def account_list(request, format=None):
    if request.method == 'GET':
        accounts = Account.objects.all()
        serializer = AccountSerializer(accounts, many=True)
        return Response(serializer.data)

@api_view(['GET', 'PUT', 'DELETE'])
def account_detail(request, id, format=None):
    try:
        account = Account.objects.get(pk=id)
    except Account.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = AccountSerializer(account)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = AccountSerializer(account, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        account.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

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

    try:    
        path_cv = cv.file.path
        print(path_cv)
        f = open(path_cv, 'rb')
        response = HttpResponse(f, content_type='application/pdf')
        response['Content-Disposition'] = 'attachment; filename="cv.pdf"'
        return response
    except IOError:
        return Response(status=status.HTTP_404_NOT_FOUND)
