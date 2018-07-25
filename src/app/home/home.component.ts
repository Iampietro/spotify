import { Component } from '@angular/core';
import { SpotifyAPIService } from '../Services/spotify-api/spotify-api.service';
import { Album } from '../model/album';
import { Track } from '../model/track';
import { SpotifyAudioService } from '../Services/spotify-audio/spotify-audio.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import config from '../web-config/config';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class Home {
    
    artist: string;
    albums: Album[];
    album: Album;
    track: Track;
    spotifyAudioSubscription: Subscription;

    constructor(public SpotifyService: SpotifyAPIService,
        public SpotifyAudio: SpotifyAudioService,
        public router: Router,
        private route: ActivatedRoute,) {
        this.artist = '';
    }

    searchArtists(author: string) : void {
        this.router.navigate([config.ARTISTS, author]);
        
    }

    goToDetail(albumToPlay: Album): void {
        this.albums = null;
        this.SpotifyService.loadAlbum(albumToPlay.id)
            .subscribe((album: Album )=> this.album = album)
    }

    playTrack(track: Track) : void{
        if (this.track && this.track.id === track.id) { return; }
        this.track = track;
        this.SpotifyAudio.playAudioTrack(track.preview_url)
    }



}