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
    ('computer_scientist', 'Computer Scientist'),
    ('it_professional', 'IT Professional'),
    ('ux_designer_ui_developer', 'UX Designer & UI Developer'),
    ('sql_developer', 'SQL Developer'),
    ('web_designer', 'Web Designer'),
    ('web_developer', 'Web Developer'),
    ('help_desk_worker', 'Help Desk Worker'),
    ('software_engineer', 'Software Engineer'),
    ('data_entry', 'Data Entry'),
    ('devops_engineer', 'DevOps Engineer'),
    ('computer_programmer', 'Computer Programmer'),
    ('network_administrator', 'Network Administrator'),
    ('information_security_analyst', 'Information Security Analyst'),
    ('artificial_intelligence_engineer', 'Artificial Intelligence Engineer'),
    ('cloud_architect', 'Cloud Architect'),
    ('it_manager', 'IT Manager'),
    ('technical_specialist', 'Technical Specialist'),
    ('application_developer', 'Application Developer'),
    ('cto', 'Chief Technology Officer (CTO)'),
    ('cio', 'Chief Information Officer (CIO)'),
)

SALARY_CHOICE = (
    ('1', 'under 10 million'),
    ('2', '10 to 20 million'),
    ('3', '20 to 30 million'),
    ('4', 'below 30 million'),
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