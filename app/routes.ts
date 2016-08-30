import { RouterConfig } from '@angular/router';
import { EventsListComponent } from './events/events-list.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { CreateEventComponent } from './events/create-event.component'
import { Error404Component } from './errors/404.component'
import { EventDetailsResolver } from './events/event-details/event-details-resolver.service'
import { EventListResolver } from './events/events-list-resolver.service'

export const appRoutes : RouterConfig = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsListComponent, resolve: {events: EventListResolver}},
  { path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventDetailsResolver}},
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
]