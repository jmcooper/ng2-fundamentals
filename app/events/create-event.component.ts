import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'create-event',
  template: `
    <h1>New Event</h1>
    <hr>
    <div class="col-md-6">
      <h3>[Create Event Form will go here]</h3>
      <br />
      <br />
      <button type="submit" class="btn btn-primary">Save</button>
      <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>
    </div>
  `
  
})
export class CreateEventComponent{
  constructor(private router: Router) {

  }
  
  cancel() {
    this.router.navigate(['/events']);
  }
}