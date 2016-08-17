import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail" (click)="handleClickMe()">
      <h2>{{event?.name}}</h2>
      <div>Date: {{event?.date}}</div>
      <div [ngSwitch]="event?.time">Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <div>Price: \${{event?.price}}</div>
      <div [hidden]="!event?.location">
        <span>Location: {{event?.location?.address}}</span>
        <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
      </div>
      <div [hidden]="!event?.onlineUrl">
        Online Url: {{event?.onlineUrl}}
      </div>
    </div>
  `,
  styles: [`
    .pad-left { margin-left: 10px; }
    .thumbnail { min-height: 210px; }
    .well div { color: #bbb }
    .thumbnail { min-height: 210px; }
  `]
})
export class EventThumbnailComponent {
  @Input() event:any
  @Output() eventClick = new EventEmitter;

  handleClickMe() {
      this.eventClick.emit(this.event.name);
  }

}