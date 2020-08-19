from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

# from django.views.generic import RedirectView

urlpatterns = [
                  path('', include('index.urls')),
                  path('projects/', include('portfolio.urls')),
                  path('admin/', admin.site.urls),
              ] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
# Serve para que consiga carregar as imagens
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
