from rest_framework.serializers import ModelSerializer
from parler_rest.serializers import TranslatableModelSerializer
from parler_rest.fields import TranslatedFieldsField
from .models import Category, Product, ProductImgs, Brand, Certificate, Project, ProjectImgs, Info
from .mixins import TranslatedSerializerMixin

class CategorySerializer(TranslatedSerializerMixin, TranslatableModelSerializer):
    translations = TranslatedFieldsField(shared_model=Category)

    class Meta:
        model = Category
        fields = '__all__'

class ProductSerializer(TranslatedSerializerMixin, TranslatableModelSerializer):
    translations = TranslatedFieldsField(shared_model=Product)

    class Meta:
        model = Product
        fields = '__all__'

class ProductImgsSerializer(ModelSerializer):

    class Meta:
        model = ProductImgs
        fields = '__all__'

class BrandSerializer(ModelSerializer):

    class Meta:
        model = Brand
        fields = '__all__'

class CertificateSerializer(ModelSerializer):

    class Meta:
        model = Certificate
        fields = '__all__'

class ProjectSerializer(TranslatedSerializerMixin, TranslatableModelSerializer):
    translations = TranslatedFieldsField(shared_model=Project)

    class Meta:
        model = Project
        fields = '__all__'

class ProjectImgsSerializer(ModelSerializer):
    
    class Meta:
        model = ProjectImgs
        fields = '__all__'

class InfoSerializer(TranslatedSerializerMixin, TranslatableModelSerializer):
    translations = TranslatedFieldsField(shared_model=Info)

    class Meta:
        model = Info
        fields = '__all__'
