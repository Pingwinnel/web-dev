from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=200)
    def __str__(self):
        return self.name
class Product(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    description = models.TextField()
    price = models.FloatField(default=0)
    count = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)
    category_id = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True)
    def __str__(self):
        return self.name


