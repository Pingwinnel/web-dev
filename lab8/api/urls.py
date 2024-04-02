from django.urls import path
from .views import (
    ProductViewCreate,
    ProductRetrieveUpdateDestroy,
    CategoryViewSet,
    CategoryRetriveUpdateDelete,
    CategoryProductListView,
)

urlpatterns = [
    path('products/', ProductViewCreate.as_view(), name='Product_List'),
    path('products/<int:pk>/', ProductRetrieveUpdateDestroy.as_view(), name='Product_Detail'),
    path('categories/', CategoryViewSet.as_view(), name='Categories_list'),
    path('categories/<int:pk>/', CategoryRetriveUpdateDelete.as_view(), name='Category_Detail'),
    path('categories/<int:id>/products/', CategoryProductListView.as_view(), name='Category_Products_List'),
]