import { Component } from '@angular/core';
import { EventsListComponent } from './events/events-list.component';
import { NavBarComponent } from './nav/navbar.component';

@Component({
  selector: 'events-app',
  template: `
    <nav-bar></nav-bar>
    <events-list></events-list>
  `,
  directives: [EventsListComponent, NavBarComponent]
})
export class EventsAppComponent {
  constructor() {}
}