from django.http import HttpResponse, JsonResponse
from .models import Account
from .serializers import AccountSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['POST'])
def sign_up(request, format=None):
    if request.data['name'] == '':
        return Response(
            'You should provide your fullname',
            status = status.HTTP_203_NON_AUTHORITATIVE_INFORMATION,
        )

    if request.data['username'] == '':
        return Response(
            'You should provide your username',
            status = status.HTTP_203_NON_AUTHORITATIVE_INFORMATION,
        )

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

    if request.data['email'] == '':
        return Response(
            'You should provide your email address',
            status = status.HTTP_203_NON_AUTHORITATIVE_INFORMATION,
        )

    if request.data['phoneNumber'] == '':
        return Response(
            'You should provide your phone number',
            status = status.HTTP_203_NON_AUTHORITATIVE_INFORMATION,
        )

    if request.data['address'] == '':
        return Response(
            'You should provide your address',
            status = status.HTTP_203_NON_AUTHORITATIVE_INFORMATION,
        )

    if request.data['password'] == '':
        return Response(
            'You should provide your password',
            status = status.HTTP_203_NON_AUTHORITATIVE_INFORMATION,
        )

    if request.data['isCompany'] == False and request.data['isEmployee'] == False:
        return Response(
            'You Should Pick Your Role', 
            status=status.HTTP_203_NON_AUTHORITATIVE_INFORMATION
        )
        
    serializer = AccountSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(
            serializer.data,
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
    serializer = AccountSerializer(account)
    return Response(serializer.data, status=status.HTTP_200_OK)

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