import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EventsAppComponent }  from './events-app.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { CreateEventComponent } from './events/create-event.component'
import { Error404Component } from './errors/404.component'
import { appRoutes } from './routes';
import { CheckEventService } from './events/event-details/check-event.service'

@NgModule({
  imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes) ],
  declarations: [ 
    EventsAppComponent, 
    EventsListComponent,
    EventThumbnailComponent, 
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component ],
  providers: [
    EventService, 
    ToastrService,
    CheckEventService],
  bootstrap: [ EventsAppComponent ]
})
export class AppModule { }