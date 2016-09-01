import { RouterConfig } from '@angular/router'
import { 
  EventsListComponent, 
  EventDetailsComponent, 
  CreateEventComponent, 
  EventDetailsResolver, 
  EventListResolver } from './events/index'
import { Error404Component } from './errors/404.component'

export const appRoutes : RouterConfig = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsListComponent, resolve: {events: EventListResolver}},
  { path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventDetailsResolver}},
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
]