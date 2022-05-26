from django.contrib import admin
from django.contrib.auth.models import User, Group
from parler.admin import TranslatableAdmin
from .models import (
    Category,
    Product,
    ProductImgs,
    Project,
    ProjectImgs,
    Brand,
    Certificate,
    Info,
    Cover
    )

class CategoryAdmin(TranslatableAdmin):
    list_display = ('name', 'created', 'updated')
    fieldsets = (
        (None, {
            'fields': ('name', 'description', 'img'),
        }),
    )

admin.site.register(Category, CategoryAdmin)

#inlines

class ProductImgsInlineAdmin(admin.StackedInline):
    model = ProductImgs
    extra = 0

class ProjectImgsInlineAdmin(admin.StackedInline):
    model = ProjectImgs
    extra = 0

class ProductAdmin(TranslatableAdmin):
    list_filter = ('category',)
    inlines = [ProductImgsInlineAdmin]
    list_display = ('name', 'category', 'created', 'updated')
    fieldsets = (
        (None, {
            'fields': ('name', 'description', 'category', 'main_img',),
        }),
    )

admin.site.register(Product, ProductAdmin)

class ProjectAdmin(TranslatableAdmin):
    inlines = [ProjectImgsInlineAdmin]
    list_display = ('name',)
    fieldsets = (
        (None, {
            'fields': ('name', 'description', 'text', 'main_img',),
        }),
    )

admin.site.register(Project, ProjectAdmin)

class InfoAdmin(TranslatableAdmin):
    list_display = ('street', 'district', 'city')
    fieldsets = (
        (None, {
            'fields': (
                'schedule1',
                'schedule2',
                'country',
                'city',
                'district',
                'street',
                'phone1',
                'phone2',
                'email1',
                'email2',),
        }),
    )

    #disabling to add multiple object
    def has_add_permission(self, request, obj=None):
        if Info.objects.exists():
            return False
        return True
    #disabling to delete
    def has_delete_permission(self, request, obj=None):
        return False

admin.site.register(Info, InfoAdmin)

class CoverAdmin(TranslatableAdmin):
    list_display = ('pk',)
    fieldsets = (
        (None, {
            'fields': (
                'text',
                'img',)
        }),
    )

    #disabling to delete last object
    def has_delete_permission(self, request, obj=None):
        return len(Cover.objects.all())>1

#untranslated models
admin.site.register(Brand)
admin.site.register(Certificate)

#unregister groups and users models
admin.site.unregister(User)
admin.site.unregister(Group)


admin.site.site_title = "Административный сайт CCS"
admin.site.site_header = "Comfort Cooling Service"