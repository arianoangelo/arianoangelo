from django.contrib import admin
from .models import RedirectStorage


@admin.register(RedirectStorage)
class RedirectStorageAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug', 'counter')

    search_fields = ('name', 'group_name')
