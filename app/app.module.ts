import { NgModule, forwardRef } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { EventsAppComponent }  from './events-app.component'
import { EventService,
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventDetailsResolver,
  EventListResolver} from './events/index'
import { ToastrService } from './common/toastr.service'
import { NavBarComponent } from './nav/navbar.component'
import { Error404Component } from './errors/404.component'
import { appRoutes } from './routes'
import { AuthService } from './user/auth.service'
import { LocationValidator } from './events/location-validator.directive'
import { FormsModule, ReactiveFormsModule, NG_VALIDATORS } from '@angular/forms';

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(appRoutes) ],
  declarations: [ 
    EventsAppComponent, 
    EventsListComponent,
    EventThumbnailComponent, 
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    LocationValidator,
    Error404Component ],
  providers: [
    EventService, 
    ToastrService,
    EventDetailsResolver,
    EventListResolver,
    {provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true},
    AuthService,
    {
      provide: 'canDeactivateCreateEvent', 
      useValue: checkDirtyState     
    }],
  bootstrap: [ EventsAppComponent ]
})
export class AppModule { }

function checkDirtyState(component:CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, Do you really want to cancel?') 

  return true
}