from django.contrib import admin
from portfolio.models import Category, Project, Image


# Register your models here.

class PortfolioAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("name",)}


admin.site.register(Category)
admin.site.register(Image)
admin.site.register(Project, PortfolioAdmin)
