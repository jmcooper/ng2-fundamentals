import { Component } from '@angular/core';
import { EventsListComponent } from './events/events-list.component';

@Component({
  selector: 'events-app',
  template: '<events-list></events-list>',
  directives: [EventsListComponent]
})
export class EventsAppComponent {
  constructor() {}
}