from django.db import models
from django.urls import reverse
from django.utils.text import slugify
import datetime
from tinymce.models import HTMLField


# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=200, help_text='Insert the category name.')

    class Meta:
        """
        Adicionar plural do nome.
        """
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name


class Image(models.Model):
    """
    Para enviar imagens
    """
    name = models.CharField(max_length=200, help_text="Set a name for the image")
    image = models.ImageField(upload_to="portfolio-photos")

    def __str__(self):
        return self.name


class Project(models.Model):

    YEAR_CHOICES = []
    for r in range(1980, (datetime.datetime.now().year + 1)):
        YEAR_CHOICES.append((r, r))

    """
    Definir o item do portfólio.
    """
    name = models.CharField(max_length=200, help_text='Type the name')
    text = HTMLField(default='')
    portfolio_image = models.ImageField(upload_to='portfolio-photos')
    date = models.IntegerField('year', choices=YEAR_CHOICES, default=datetime.datetime.now().year)
    timestamp = models.DateField(auto_now_add=True)
    category = models.ManyToManyField(Category, help_text='Select the category')
    images = models.ManyToManyField(Image, help_text='Select the images of this post', blank=True)
    slug = models.SlugField(unique=True)

    def get_absolute_url(self):
        slug = slugify(self.name)
        """Returns the urls to access a detail record for this item."""
        return reverse('project-detail', args=[str(slug)])

    def __str__(self):
        return self.name
