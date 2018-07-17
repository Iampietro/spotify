import { Component } from '@angular/core';
import { FormFilter } from './Form/formfilter.component';
import { SpotifyAPIService } from './Services/spotify-api.service';
import { Album  } from './Services/album-interface';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: []
  })

  export class Home {
    artist = "The Damned";
    albums: Album[];
    album: Album;

    constructor(public SpotifyService: SpotifyAPIService){
        this.searchAlbums(this.artist);
    }

    searchAlbums(author: string){
        this.SpotifyService.searchAlbums(author)
            .subscribe(res => this.albums = res.albums.items)
    }
  }