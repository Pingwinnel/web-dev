from django.db import models

class Company(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    city = models.CharField(max_length=200)
    description = models.TextField()
    def __str__(self):
        return self.name

class Vacancy(models.Model):
    id = models.AutoField(primary_key=True)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    salary = models.IntegerField(default=0)
    description = models.TextField()


    def __str__(self):
        return self.name