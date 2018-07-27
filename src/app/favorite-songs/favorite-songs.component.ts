import { Component, OnInit } from '@angular/core';
import { Track } from '../model/track';
import { SpotifyAPIService } from '../Services/spotify-api/spotify-api.service';
import { SpotifyAudioService } from '../Services/spotify-audio/spotify-audio.service';
import { Router } from '@angular/router';
import config from '../web-config/config'

@Component({
    selector: 'favorite-songs',
    templateUrl: 'favorite-songs.component.html',
    styleUrls: ['favorite-songs.component.css']
})

export class FavoriteSongs implements OnInit {

    tracks: Track[];
    tracksIDs: string[];

    constructor(private SpotifyService: SpotifyAPIService,
                private SpotifyAudio: SpotifyAudioService,
                private router: Router
    ) {
        this.tracksIDs = [];
        this.tracks = [];
    }

    ngOnInit() {
        const IDs = localStorage.getItem('favorites');
        if(IDs) {
            this.tracksIDs = JSON.parse(IDs);
            this.tracksIDs.forEach( track => {
                this.SpotifyService.searchTrack(track)
                    .subscribe((res:Track) => {this.tracks.push(res); console.log(res)})
            })
        }
    }

    playTrack(track: Track) : void {
       this.router.navigate([config.ALBUM + track.album.id]);
    }
}