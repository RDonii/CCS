from django.urls import path
from .views import (
    CategoryListView,
    CategoryDetailView,
    ProductListView,
    ProductDetailView,
    ProductImgsListView
)

urlpatterns = [
    path('categories/', CategoryListView.as_view()),
    path('categories/<int:pk>', CategoryDetailView.as_view()),
    path('categories/<int:categoty_id>/products/', ProductListView.as_view()),
    path('products/<int:pk>', ProductDetailView.as_view()),
    path('products/<int:product_id>/imgs', ProductImgsListView.as_view()),
]
