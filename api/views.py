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
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

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

class CharacteristicListView(ListAPIView):
    serializer_class = CharacteristicSerializer

    def get_queryset(self):
        product = get_object_or_404(Product, pk=self.kwargs['product_id'])
        return Characteristic.objects.filter(product=product)

class BrandListView(ListAPIView):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer

class CertificateListView(ListAPIView):
    queryset = Certificate.objects.all()
    serializer_class = CertificateSerializer

class ProjectListView(ListAPIView):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()

class ProjectDetailView(RetrieveAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ProjectImgsListView(ListAPIView):
    serializer_class = ProjectImgsSerializer

    def get_queryset(self):
        project = get_object_or_404(Project, pk=self.kwargs['project_id'])
        return ProjectImgs.objects.filter(project=project)

class InfoListView(ListAPIView):
    serializer_class = InfoSerializer
    queryset = Info.objects.all()