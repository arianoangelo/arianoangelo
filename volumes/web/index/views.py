from django.shortcuts import render, get_object_or_404, redirect
from .models import RedirectStorage


# Create your views here.

def index(_r):
    """
    Página inicial
    """
    options = {
        'site_title': 'Ariano Ângelo',
        'site_description': 'Web Developer',
    }

    return render(_r, 'index/index.html', options)


def contacts(_r):
    """
    Página contacts
    """
    options = {
        'site_title': 'Ariano Ângelo',
        'site_description': 'Contacts',
    }

    return render(_r, 'index/contact.html', options)


def redirect_view(_r, slug):
    redirect_obj = get_object_or_404(RedirectStorage, slug=slug)
    redirect_obj.counter += 1
    redirect_obj.save()
    return redirect(redirect_obj.url)

