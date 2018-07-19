import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tracks-list',
  templateUrl: 'track-list.component.html',
  styleUrls: ['./track-list.component.css']

})
export class TrackListComponent {
  
  @Input() album: any;
  @Input() track: any;
  @Output() trackClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
}
