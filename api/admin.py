from django.contrib import admin
from django.contrib.auth.models import User, Group
from parler.admin import TranslatableStackedInline, TranslatableAdmin
from .models import (
    Category,
    Product,
    Characteristic,
    Project,
    Brand,
    Certificate,
    Info
    )

class CategoryAdmin(TranslatableAdmin):
    list_display = ('name',)
    fieldsets = (
        (None, {
            'fields': ('name', 'description', 'img'),
        }),
    )

admin.site.register(Category, CategoryAdmin)

#inline for product
class CharacteristicInlineAdmin(TranslatableStackedInline):
    model = Characteristic
    extra = 0

class ProductAdmin(TranslatableAdmin):
    inlines = [CharacteristicInlineAdmin]
    list_display = ('name', 'category',)
    fieldsets = (
        (None, {
            'fields': ('name', 'description', 'category', 'imgs'),
        }),
    )

admin.site.register(Product, ProductAdmin)

class ProjectAdmin(TranslatableAdmin):
    list_display = ('name',)
    fieldsets = (
        (None, {
            'fields': ('name', 'description', 'text', 'main_img', 'imgs'),
        }),
    )

admin.site.register(Project, ProjectAdmin)

class InfoAdmin(TranslatableAdmin):
    list_display = ('address',)
    fieldsets = (
        (None, {
            'fields': (
                'schedule1',
                'schedule2',
                'address',
                'phone1',
                'phone2',
                'email1',
                'email2'),
        }),
    )

    #disabling to add
    def has_add_permission(self, request, obj=None):
        if Info.objects.exists():
            return False
        return True
    #disabling to delete
    def has_delete_permission(self, request, obj=None):
        return False

admin.site.register(Info, InfoAdmin)

#untranslated models
admin.site.register(Brand)
admin.site.register(Certificate)

#unregister groups and users models
admin.site.unregister(User)
admin.site.unregister(Group)