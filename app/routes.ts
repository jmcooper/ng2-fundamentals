import { Routes } from '@angular/router'

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventResolver,
    EventListResolver,
    CreateSessionComponent
} from './events/index'

import { Error404Component } from './errors/404.component'

export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent,
        canDeactivate:['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent,resolve: {
        events:EventListResolver} },
    { path: 'events/:id', component: EventDetailsComponent, 
        resolve: { event: EventResolver} },    
    { path: 'events/session/new',component: CreateSessionComponent},
    { path: '404' , component: Error404Component },    
    { path: '' , redirectTo: 'events', pathMatch: 'full'},   
    { path:'user', loadChildren: 'app/user/user.module#UserModule'} 
]