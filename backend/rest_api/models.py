from django.db import models

class Account(models.Model):
    username = models.CharField(max_length=200)
    password = models.CharField(max_length=200)
    name = models.CharField(max_length=200, blank=True)
    email = models.CharField(max_length=200, blank=True)
    phoneNumber = models.CharField(max_length=200, blank=True)
    address = models.CharField(max_length=200, blank=True)
    isCompany = models.BooleanField(default=False, blank=True)
    isEmployee = models.BooleanField(default=False, blank=True)
    isAdmin = models.BooleanField(default=False, blank=True)

    def __str__(self):
        return self.username

class Recruitment(models.Model):
    idCompany = models.IntegerField()
    job = models.CharField(max_length=200)
    salary = models.CharField(max_length=200)
    time = models.CharField(max_length=200)
    description = models.CharField(max_length=200, blank=True)
    tag = models.CharField(max_length=200, blank=True)
    isApproved = models.BooleanField(blank=True)

    def __str__(self):
        return str(self.idCompany) + " " + self.job

class CV(models.Model):
    idAccount = models.IntegerField()
    idRecruitment = models.IntegerField()
    file = models.FileField(upload_to='spec')

    def __str__(self):
        return str(self.idAccount) + " " + str(self.idRecruitment)