import { RouterConfig } from '@angular/router';
import { EventsListComponent } from './events/events-list.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { CreateEventComponent } from './events/create-event.component'
import { Error404Component } from './errors/404.component'
import { CheckEventService } from './events/event-details/check-event.service'

export const appRoutes : RouterConfig = [
  { path: 'events/new', component: CreateEventComponent },
  { path: 'events', component: EventsListComponent},
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [CheckEventService]},
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full'}
]