import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Album } from '../Services/album-interface';

@Component({
  selector: 'album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['album-list.component.css']
})
export class AlbumListComponent {
  @Input() albums: Array<Album>;
  @Input() activeAlbum: Album;
  @Output() itemClick: EventEmitter<Album> = new EventEmitter<Album>();
}
