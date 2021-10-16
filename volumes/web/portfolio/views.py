# from django.shortcuts import render
from django.utils.html import strip_spaces_between_tags, strip_tags
from portfolio.models import Project
from django.views import generic


# Create your views here.

class ProjectList(generic.ListView):
    model = Project
    template_name = 'portfolio/project_list.html'

    def get_context_data(self, **kwargs):
        context = super(ProjectList, self).get_context_data(**kwargs)

        context.update({
            'site_title': 'Ariano Ângelo',
            'site_description': 'Portfolio',
        })

        return context


class ProjectDetail(generic.DetailView):
    model = Project
    template_name = 'portfolio/project_detail.html'

    def get_context_data(self, **kwargs):
        context = super(ProjectDetail, self).get_context_data(**kwargs)

        context.update({
            'site_title': 'Ariano Ângelo',
            'site_description': format(self.object.name),
            'seo_description': strip_spaces_between_tags(strip_tags(self.object.text)),
            'seo_image': self.object.portfolio_image.url,
            'seo_article': True
        })

        return context
