import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'event-details',
  templateUrl: '/app/events/event-details/event-details.component.html',  
  styles: [`
    .container { padding-left:20px; padding-right:20px; }
    .event-image { height:100px; }
  `]
})
export class EventDetailsComponent implements OnInit {
  event: any

  constructor(
    private route: ActivatedRoute) {

    }

  ngOnInit() {
    this.event = this.route.snapshot.data['event']
  }
}