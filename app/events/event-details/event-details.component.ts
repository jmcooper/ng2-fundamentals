import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { IEvent } from '../shared/index'

@Component({
  templateUrl: '/app/events/event-details/event-details.component.html',  
  styles: [`
    .container { padding-left:20px; padding-right:20px; }
    .event-image { height:100px; }
  `]
})
export class EventDetailsComponent implements OnInit {
  event:IEvent

  constructor(
    private route: ActivatedRoute) {

    }

  ngOnInit() {
    this.event = this.route.snapshot.data['event']
  }
}