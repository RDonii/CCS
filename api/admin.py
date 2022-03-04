from django.contrib import admin
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
    list_display = '__all__'
    fieldsets = (
        (None, {
            'fields': ('name', 'description'),
        }),
    )

admin.site.register(Category, CategoryAdmin)

#inline for product
class CharacteristicInlineAdmin(TranslatableStackedInline):
    model = Characteristic
    extra = 0

class ProductAdmin(TranslatableAdmin):
    inlines = [CharacteristicInlineAdmin]
    list_display = '__all__'
    fieldsets = (
        (None, {
            'fields': ('name', 'description'),
        }),
    )

admin.site.register(Product, ProductAdmin)

class ProjectAdmin(TranslatableAdmin):
    list_display = '__all__'
    fieldsets = (
        (None, {
            'fields': ('name', 'description', 'text'),
        }),
    )

admin.site.register(Project, ProjectAdmin)

class InfoAdmin(TranslatableAdmin):
    list_display = '__all__'
    fieldsets = (
        (None, {
            'fields': ('schedule1', 'schedule2', 'address'),
        }),
    )

    #disabling to add
    def has_add_permission(self, request, obj=None):
        return False
    #disabling to delete
    def has_delete_permission(self, request, obj=None):
        return False

admin.site.register(Info, InfoAdmin)

#untranslated models
admin.site.register(Brand)
admin.site.register(Certificate)