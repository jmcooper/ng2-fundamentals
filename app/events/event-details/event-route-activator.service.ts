import {CanActivate} from "@angular/router";
import {Injectable} from "@angular/core";
import { Router } from '@angular/router';
import { EventService } from '../shared/event.service';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class EventRouteActivator implements CanActivate{
  constructor(private eventService:EventService, private router:Router) {

  }

  canActivate(route: ActivatedRouteSnapshot) {
    let eventExists = !!this.eventService.getEvent(+route.params['id'])
    if (!eventExists)
      this.router.navigate(['/404'])
    
    return eventExists 
  }
}