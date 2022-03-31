from django.shortcuts import get_object_or_404
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Category, Product, ProductImgs, Brand, Certificate, Project, ProjectImgs, Info
from .mixins import TranslatedViewMixin
from .serializers import (
    CategorySerializer,
    ProductSerializer,
    ProductImgsSerializer,
    BrandSerializer,
    CertificateSerializer,
    ProjectSerializer,
    ProjectImgsSerializer,
    InfoSerializer
)

from django.http import JsonResponse


def searching(request, lang):
        word = request.GET.get('search')
        if not word:
            return JsonResponse({
            'categories': [],
            'products': [],
            'projects': []
        })
        categories_query = Category.objects.filter(translations__name__icontains=word)
        products_query = Product.objects.filter(translations__name__icontains=word)
        projects_query = Project.objects.filter(translations__name__icontains=word)

        #adding lang to use in TranslatedSerializerMixin
        categories = CategorySerializer(categories_query, many=True)
        categories.context['kwargs'] = {'lang': lang}
        products = ProductSerializer(products_query, many=True)
        products.context['kwargs'] = {'lang': lang}
        projects = ProjectSerializer(projects_query, many=True)
        projects.context['kwargs'] = {'lang': lang}
        
        return JsonResponse({
            'categories': categories.data,
            'products': products.data,
            'projects': projects.data
        })

class CategoryListView(TranslatedViewMixin, ListAPIView):
    
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

class CategoryDetailView(TranslatedViewMixin, RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ProductListView(TranslatedViewMixin, ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        category = get_object_or_404(Category, pk=self.kwargs['categoty_id'])
        return Product.objects.filter(category=category)

class ProductDetailView(TranslatedViewMixin, RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductImgsListView(ListAPIView):
    serializer_class = ProductImgsSerializer

    def get_queryset(self):
        product = get_object_or_404(Product, pk=self.kwargs['product_id'])
        return ProductImgs.objects.filter(product=product)

class BrandListView(ListAPIView):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer

class CertificateListView(ListAPIView):
    queryset = Certificate.objects.all()
    serializer_class = CertificateSerializer

class ProjectListView(TranslatedViewMixin, ListAPIView):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()

class ProjectDetailView(TranslatedViewMixin, RetrieveAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ProjectImgsListView(ListAPIView):
    serializer_class = ProjectImgsSerializer

    def get_queryset(self):
        project = get_object_or_404(Project, pk=self.kwargs['project_id'])
        return ProjectImgs.objects.filter(project=project)

class InfoListView(TranslatedViewMixin, ListAPIView):
    serializer_class = InfoSerializer
    queryset = Info.objects.all()