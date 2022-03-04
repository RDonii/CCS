from django.db import models

from django.utils.translation import gettext as _
from parler.models import TranslatableModel, TranslatedFields

class Category(TranslatableModel):
    translations = TranslatedFields(
        name = models.CharField(_("Name"), max_length=100),
        description = models.TextField(_("Description"), null=True, blank=True)
    )

    img = models.ImageField(null=False, upload_to='category_pics')

    def __str__(self):
        return self.name

class Product(TranslatableModel):
    translations = TranslatedFields(
        name = models.CharField(_("Name"), max_length=100),
        description = models.TextField(_("Description"), null=True, blank=True)
    )

    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    imgs = models.FileField(null=False, upload_to='product_pics')

    def __str__(self):
        return self.name

class Characteristic(TranslatableModel):
    translations = TranslatedFields(
        key = models.CharField(_("Key"), max_length=50),
        value = models.CharField(_("Value"), max_length=50)
    )

    product = models.ForeignKey(Product, on_delete=models.CASCADE)

class Project(TranslatableModel):
    translations = TranslatedFields(
        name = models.CharField(_("Name"), max_length=200),
        description = models.TextField(_("Description"), null=True, blank=True),
        text = models.TextField(_("Text"), null=False, blank=False)
    )

    main_img = models.ImageField(null=False)
    imgs = models.FileField(null=True, upload_to='project_pics')

    def __str__(self):
        return self.name

class Brand(models.Model):
    name = models.CharField(max_length=50)
    img = models.ImageField(null=False, upload_to='brand_pics')
    link = models.CharField(max_length=200, null=True, blank=True)

class Certificate(models.Model):
    title = models.CharField(max_length=150)
    img = models.ImageField(null=False, upload_to='certificate_pics')

class Info(TranslatableModel):
    translations = TranslatedFields(
        schedule1 = models.CharField(_("Schedule1"), max_length=300, null=True, blank=True),
        schedule2 = models.CharField(_("Schedule2"), max_length=300, null=True, blank=True),
        address = models.CharField(_("Address"), max_length=300, null=True, blank=True)
    )

    phone1 = models.CharField(max_length=20, null=True, blank=True)
    phone2 = models.CharField(max_length=20, null=True, blank=True)
    email1 = models.CharField(max_length=320, null=True, blank=True)
    email2 = models.CharField(max_length=320, null=True, blank=True)
