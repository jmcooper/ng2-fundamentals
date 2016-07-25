import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  template:`
  <div>
    <h1>Upcoming Angular 2 Events</h1>
    <br>
    <div class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <span>Date:</span>
        <span>{{event.date}}</span><br>
        <span>Time:</span>
        <span>{{event.time}}</span><br>
        <span>Price:</span>
        <span>\${{event.price}}</span><br>
        <span>Location:</span>
        <span>{{event.location.address}}</span>
        <span>&nbsp;</span>
        <span>{{event.location.city}}, {{event.location.country}}</span>
    </div>
  </div>
  `
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