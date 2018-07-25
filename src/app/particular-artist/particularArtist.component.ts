import { Component, OnInit, EventEmitter } from '@angular/core';
import { Album } from '../model/album';
import { SpotifyAPIService } from '../Services/spotify-api/spotify-api.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Router } from '@angular/router';
import { SpotifyAudioService } from '../Services/spotify-audio/spotify-audio.service'
import config from '../web-config/config';


@Component({
    selector: 'particularArtist',
    templateUrl: './particularArtist.component.html',
    styleUrls: ['/particularArtist.component.css']
})

export class ParticularArtist implements OnInit {

    albums: Album[];

    constructor(private SpotifyService: SpotifyAPIService,
                private route: ActivatedRoute,
                public router: Router,
                private SpotifyAudio: SpotifyAudioService
        ) {
    }

    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.SpotifyService.searchArtistAlbums(params.get('artist')))
            .subscribe(res => this.albums = res.items);
    }

    searchArtists(artist: string) : void {
        this.router.navigate([config.ARTISTS, artist]);
    }

    goToAlbum(albumId: string) : void {
        this.router.navigate([config.ALBUM, albumId]);
    }

    goHome() : void {
        this.SpotifyAudio.pauseTrack();
        this.router.navigate([config.HOME]);
    }
}