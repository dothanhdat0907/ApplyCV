from rest_framework import serializers
from .models import Account
from .models import Recruitment
from .models import CV


class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = [
            'id', 
            'username', 
            'password',
            'name',
            'email',
            'phoneNumber',
            'address',
            'isCompany',
            'isEmployee',
            'isAdmin',
        ]

class RecruitmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recruitment
        fields = [
            'id',
            'idCompany',
            'job',
            'salary',
            'time',
            'description',
            'tag',
            'isApproved',
        ]

class CVSerializer(serializers.ModelSerializer):
    class Meta:
        model = CV
        fields = [
            'id',
            'idAccount',
            'idRecruitment',
            'data',
        ]