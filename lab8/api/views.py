from django.shortcuts import render
from rest_framework import viewsets

from .models import Product,Category

from rest_framework import generics
from .serializer import ProductSerializer,CategorySerializer
# Create your views here.
class ProductViewCreate(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class =ProductSerializer


class ProductRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class =ProductSerializer

class CategoryViewSet(generics.ListCreateAPIView):
    queryset =Category.objects.all()
    serializer_class =CategorySerializer

class CategoryRetriveUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class =CategorySerializer

class CategoryProductListView(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        category_id = self.kwargs['id']
        return Product.objects.filter(category_id=category_id)