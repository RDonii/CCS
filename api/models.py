from email.policy import default
from django.db import models
from CCS import settings

from django.utils.translation import gettext as _
from parler.models import TranslatableModel, TranslatedFields

class Category(TranslatableModel):
    translations = TranslatedFields(
        name = models.CharField("Название", max_length=100),
        description = models.TextField("Описание", null=True, blank=True),
    )

    img = models.ImageField( "Обложка", null=False, upload_to='category_pics')
    created = models.DateField(_("Дата создания"), auto_now_add=True)
    updated = models.DateField(_("Дата последнего обновления"), auto_now=True)

    class Meta:
        ordering = ('-created',)
        verbose_name = "Каталог"
        verbose_name_plural = "Каталоги"

    def __str__(self):
        return self.name

class Product(TranslatableModel):
    translations = TranslatedFields(
        name = models.CharField("Название", max_length=100),
        description = models.TextField("Описание", null=True, blank=True)
    )

    category = models.ForeignKey(Category, on_delete=models.CASCADE, verbose_name = 'Каталог')
    main_img = models.ImageField("Обложка", null=False, upload_to='product_pics')
    created = models.DateField(_("Дата создания"), auto_now_add=True)
    updated = models.DateField(_("Дата последнего обновления"), auto_now=True)

    class Meta:
        ordering = ('-created',)
        verbose_name = "Товар"
        verbose_name_plural = "Продукты"

    def __str__(self):
        return self.name

class ProductImgs(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, verbose_name = 'Товар')
    img = models.ImageField('Изображение', null=False, upload_to='product_pics')

    class Meta:
        verbose_name = 'Изображение продукта'
        verbose_name_plural = 'Изображения продукта'

    def __str__(self):
        return str(self.pk)

class Project(TranslatableModel):
    translations = TranslatedFields(
        name = models.CharField("Название", max_length=200),
        description = models.TextField("Описание", null=True, blank=True),
        text = models.TextField("Основная часть статьи", null=False, blank=False)
    )

    main_img = models.ImageField("Обложка", null=False)

    class Meta:
        verbose_name = 'Проект'
        verbose_name_plural = 'Проекты'

    def __str__(self):
        return self.name

class ProjectImgs(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, verbose_name = 'проект')
    img = models.ImageField("картина", null=False, upload_to='project_pics')

    class Meta:
        verbose_name = 'картина'
        verbose_name_plural = 'фотографий'

    def __str__(self):
        return str(self.pk)

class Brand(models.Model):
    name = models.CharField('Название компании', max_length=50)
    img = models.ImageField('Логотип', null=False, upload_to='brand_pics')

    class Meta:
        verbose_name = 'Бренд'
        verbose_name_plural = 'Бренды'

    def __str__(self):
        return self.name

class Certificate(models.Model):
    title = models.CharField('Название', max_length=150)
    img = models.ImageField('Сертификат', null=False, upload_to='certificate_pics')

    class Meta:
        verbose_name = 'Сертификат'
        verbose_name_plural = 'Сертификаты'

    def __str__(self):
        return self.title

class Info(TranslatableModel):
    translations = TranslatedFields(
        schedule1 = models.CharField("Рабочее расписание 1", max_length=300, null=True, blank=True),
        schedule2 = models.CharField("Рабочее расписание 2", max_length=300, null=True, blank=True),
        country = models.CharField("Страна", max_length=300, null=True, blank=True),
        city = models.CharField("Город", max_length=300, null=True, blank=True),
        district = models.CharField("Район", max_length=300, null=True, blank=True),
        street = models.CharField("Улица с номером адресов", max_length=300, null=True, blank=True),
    )

    phone1 = models.CharField("Тел 1", max_length=20, null=True, blank=True)
    phone2 = models.CharField("Тел 2", max_length=20, null=True, blank=True)
    email1 = models.CharField("Эл. адрес 1", max_length=320, null=True, blank=True)
    email2 = models.CharField("Эл. адрес 2", max_length=320, null=True, blank=True)

    class Meta:
        verbose_name = "Контакты"
        verbose_name_plural = "Контакты"
    
    def __str__(self):
        return 'Контакт'

class Cover(TranslatableModel):
    translations = TranslatedFields(
        text = models.CharField("Техт", max_length=100, null=False, blank=False),
    )

    img = models.ImageField( "Обложка", null=False, upload_to='cover_pics')
    created = models.DateField(_("Дата создания"), auto_now_add=True)
    updated = models.DateField(_("Дата последнего обновления"), auto_now=True)

    class Meta:
        ordering = ('-created',)
        verbose_name = "Обложка"
        verbose_name_plural = "Обложки"

    def str(self):
        return self.text