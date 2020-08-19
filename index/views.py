from django.shortcuts import render


# Create your views here.

def index(request):
    """
    Página inicial
    """
    options = {
        'site_title': 'Ariano Ângelo',
        'site_description': 'Web Developer/Designer from Portugal',
    }

    return render(request, 'index/index.html', options)


def contacts(request):
    """
    Página contacts
    """
    options = {
        'site_title': 'Ariano Ângelo',
        'site_description': 'Contacts',
    }

    return render(request, 'index/contact.html', options)
