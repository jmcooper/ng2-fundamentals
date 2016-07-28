import { Component } from '@angular/core';
import { EventsListComponent } from './events/events-list.component';

@Component({
  selector: 'events-app',
  template: `
  	<div class="well">
      <div>Hello World</div>
    </div>
    <events-list></events-list>
  `,
  directives: [EventsListComponent]
})
export class EventsAppComponent {
  constructor() {}
}