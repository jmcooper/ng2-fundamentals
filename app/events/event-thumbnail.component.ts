import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail" (click)="handleClickMe()">
      <h2>{{event?.name}}</h2>
      <div>Date: {{event?.date}}</div>
      <div>Time: {{event?.time}}</div>
      <div>Price: \${{event?.price}}</div>
      <div>
        <span>Location: {{event?.location?.address}}</span>
        <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
      </div>
      <div>
        Online Url: {{event.onlineUrl}}
      </div>
    </div>
  `,
  styles: [`
    .pad-left { margin-left: 10px; }
    .thumbnail { min-height: 210px; }
    .well div { color: #bbb }
  `]
})
export class EventThumbnailComponent {
  @Input() event:any
  @Output() eventClick = new EventEmitter;

  handleClickMe() {
      this.eventClick.emit(this.event.name);
  }

}