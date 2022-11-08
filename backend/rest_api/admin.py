from django.contrib import admin
from .models import Account
from .models import Recruitment
from .models import CV

admin.site.register(Account)
admin.site.register(Recruitment)
admin.site.register(CV)