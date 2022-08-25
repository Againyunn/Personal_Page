from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.
class front(TemplateView):
  template_name = 'index.html'

def front_base(request):
    context = {}
    return render(request, "index.html", context)