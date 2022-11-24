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

JOB_CHOICE = (
    ('Computer Scientist', 'Computer Scientist'),
    ('IT Professional', 'IT Professional'),
    ('UX Designer & UI Developer', 'UX Designer & UI Developer'),
    ('SQL Developer', 'SQL Developer'),
    ('Web Designer', 'Web Designer'),
    ('Web Developer', 'Web Developer'),
    ('Help Desk Worker', 'Help Desk Worker'),
    ('Software Engineer', 'Software Engineer'),
    ('Data Entry', 'Data Entry'),
    ('DevOps Engineer', 'DevOps Engineer'),
    ('Computer Programmer', 'Computer Programmer'),
    ('Network Administrator', 'Network Administrator'),
    ('Information Security Analyst', 'Information Security Analyst'),
    ('Artificial Intelligence Engineer', 'Artificial Intelligence Engineer'),
    ('Cloud Architect', 'Cloud Architect'),
    ('IT Manager', 'IT Manager'),
    ('Technical Specialist', 'Technical Specialist'),
    ('Application Developer', 'Application Developer'),
    ('Chief Technology Officer (CTO)', 'Chief Technology Officer (CTO)'),
    ('Chief Information Officer (CIO)', 'Chief Information Officer (CIO)'),
)

SALARY_CHOICE = (
    ('under 10 million vnd', 'under 10 million vnd'),
    ('10 to 20 million vnd', '10 to 20 million vnd'),
    ('20 to 50 million vnd', '20 to 50 million vnd'),
    ('above 50 million vnd', 'above 50 million vnd'),
)
class Recruitment(models.Model):
    idCompany = models.IntegerField()
    job = models.CharField(max_length=200, choices=JOB_CHOICE, default='Computer Scientist')  # type: ignore
    salary = models.CharField(max_length=200, choices=SALARY_CHOICE, default='1')
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