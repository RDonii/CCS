from django.urls import path
from .views import (
    CategoryListView,
    CategoryDetailView,
    ProductListView,
    ProductDetailView,
    ProductImgsListView,
    CharacteristicListView,
    BrandListView,
    CertificateListView,
    ProjectListView,
    ProjectDetailView,
    ProjectImgsListView,
    InfoListView
)

urlpatterns = [
    path('categories/', CategoryListView.as_view()),
    path('categories/<int:pk>/', CategoryDetailView.as_view()),
    path('categories/<int:categoty_id>/products/', ProductListView.as_view()),
    path('products/<int:pk>/', ProductDetailView.as_view()),
    path('products/<int:product_id>/imgs/', ProductImgsListView.as_view()),
    path('products/<int:product_id>/characteristic/', CharacteristicListView.as_view()),
    path('brands/', BrandListView.as_view()),
    path('certificates/', CertificateListView.as_view()),
    path('projects/', ProjectListView.as_view()),
    path('projects/<int:pk>/', ProjectDetailView.as_view()),
    path('projects/<int:project_id>/imgs/', ProjectImgsListView.as_view()),
    path('info/', InfoListView.as_view()),
]
