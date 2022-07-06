from django.contrib import admin
from django.contrib.admin import helpers
from django.contrib.auth.models import User, Group
from parler.admin import TranslatableAdmin
from .models import (
    Banner,
    Category,
    IconText,
    Product,
    ProductImgs,
    Project,
    ProjectImgs,
    Brand,
    Certificate,
    Info,
    Cover,
    ServiceSlogan
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
    list_display = ('text',)
    fieldsets = (
        (None, {
            'fields': (
                'text',
                'img',)
        }),
    )

    #disabling to delete last object
    min_objects = 1

    def has_delete_permission(self, request, obj=None):
        queryset = self.model.objects.all()

        # If we're running the bulk delete action, estimate the number
        # of objects after we delete the selected items
        selected = request.POST.getlist(helpers.ACTION_CHECKBOX_NAME)
        if selected:
            queryset = queryset.exclude(pk__in=selected)

        if queryset.count() < self.min_objects:
            message = 'Должен остаться хотя бы {} объект.'
            self.message_user(request, message.format(self.min_objects))
            return False

        return super(CoverAdmin, self).has_delete_permission(request, obj)

    #disabling to delete last one
    def has_delete_permission(self, request, obj=None):
        if self.model.objects.count() == self.min_objects:
            return False
        return True

admin.site.register(Cover, CoverAdmin)

class BannerAdmin(TranslatableAdmin):
    list_display = ('title',)
    fieldsets = (
        (None, {
            'fields': (
                'title',
                'text'),
        }),
    )

    #disabling to add multiple object
    def has_add_permission(self, request, obj=None):
        if self.model.objects.exists():
            return False
        return True
    #disabling to delete
    def has_delete_permission(self, request, obj=None):
        return False

admin.site.register(Banner, BannerAdmin)

class IconTextAdmin(TranslatableAdmin):
    list_display = ('title',)
    fieldsets = (
        (None, {
            'fields': (
                'title',
                'text',)
        }),
    )

    #disabling to delete last object
    min_objects = 2

    def has_delete_permission(self, request, obj=None):
        queryset = self.model.objects.all()

        # If we're running the bulk delete action, estimate the number
        # of objects after we delete the selected items
        selected = request.POST.getlist(helpers.ACTION_CHECKBOX_NAME)
        if selected:
            queryset = queryset.exclude(pk__in=selected)

        if queryset.count() < self.min_objects:
            message = 'Должен остаться хотя бы {} объект.'
            self.message_user(request, message.format(self.min_objects))
            return False

        return super(IconTextAdmin, self).has_delete_permission(request, obj)

    #disabling to add more than 2 object
    def has_add_permission(self, request, obj=None):
        if self.model.objects.count()==2:
            return False
        return True
    
    #disabling to delete
    def has_delete_permission(self, request, obj=None):
        return False

admin.site.register(IconText, IconTextAdmin)

class ServiceSloganAdmin(TranslatableAdmin):
    list_display = ('text',)
    fieldsets = (
        (None, {
            'fields': (
                'text',),
        }),
    )

    #disabling to add multiple object
    def has_add_permission(self, request, obj=None):
        if self.model.objects.exists():
            return False
        return True
    #disabling to delete
    def has_delete_permission(self, request, obj=None):
        return False

admin.site.register(ServiceSlogan, ServiceSloganAdmin)


#untranslated models
admin.site.register(Brand)
admin.site.register(Certificate)

#unregister groups and users models
admin.site.unregister(User)
admin.site.unregister(Group)


admin.site.site_title = "Административный сайт CCS"
admin.site.site_header = "Comfort Cooling Service"