import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  moduleId: module.id,
  templateUrl: 'events-list.component.html'
})
export class EventsListComponent {
  event = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/app/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  }

  constructor() {
  }  
  
}