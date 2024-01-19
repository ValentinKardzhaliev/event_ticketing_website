from django.views.generic import DetailView
from django.views.generic.edit import CreateView
from django.urls import reverse_lazy
from .models import Event
from .forms import EventAddForm


class EventAddView(CreateView):
    model = Event
    form_class = EventAddForm
    template_name = 'events/event_add.html'
    success_url = reverse_lazy('index')  # Adjust 'event_list' to the actual URL name for your events list

    def form_valid(self, form):
        response = super().form_valid(form)
        # Additional logic after a successful form submission
        return response


class EventDetailsView(DetailView):
    model = Event
    template_name = 'events/event_details.html'
    context_object_name = 'event'
