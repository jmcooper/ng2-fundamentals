import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router'
import { EventService } from '../shared/event.service'

@Injectable()
export class EventDetailsResolver implements Resolve<any> {
  constructor(private eventService:EventService, private router:Router) {}
  resolve(route: ActivatedRouteSnapshot) {
    return this.eventService.getEvent(+route.params['id'])
      .map(event => {
        if (event) {
          return event
        } else {
          this.router.navigate(['/404'])
        }
      })
  }
}
