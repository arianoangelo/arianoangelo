from django.db import models
from django.utils.text import slugify


class RedirectStorage(models.Model):
    name = models.CharField(max_length=64, default='')
    url = models.URLField()
    counter = models.PositiveIntegerField(default=0)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def increment_counter(self):
        self.counter += 1
        self.save()
