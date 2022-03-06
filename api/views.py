from django.shortcuts import get_object_or_404
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Category, Product, ProductImgs, Characteristic, Brand, Certificate, Project, ProjectImgs, Info
from .serializers import (
    CategorySerializer,
    ProductSerializer,
    ProductImgsSerializer,
    CharacteristicSerializer,
    BrandSerializer,
    CertificateSerializer,
    ProjectSerializer,
    ProjectImgsSerializer,
    InfoSerializer
)

class CategoryListView(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryDetailView(RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ProductListView(ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        category = get_object_or_404(Category, pk=self.kwargs['categoty_id'])
        return Product.objects.filter(category=category)

class ProductDetailView(RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductImgsListView(ListAPIView):
    serializer_class = ProductImgsSerializer

    def get_queryset(self):
        product = get_object_or_404(Product, pk=self.kwargs['product_id'])
        return ProductImgs.objects.filter(product=product)

