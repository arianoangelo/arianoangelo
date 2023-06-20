from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

# from django.views.generic import RedirectView

urlpatterns = [
    path('', include('index.urls')),
    path('projects/', include('portfolio.urls')),
    path('ariadmin/', admin.site.urls),
    path('tinymce/', include('tinymce.urls')),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)