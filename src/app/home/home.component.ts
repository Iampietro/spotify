import { Component } from '@angular/core';
import { SpotifyAPIService } from '../Services/spotify-api.service';
import { Album, Track } from '../Services/album-interface';
import { SpotifyAudioService } from '../Services/spotify-audio.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: []
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
        this.spotifyAudioSubscription = SpotifyAudio.ended$.subscribe(() => this.album = null)
    }

    searchArtists(author: string) : void {
        /*this.album = null;
        this.SpotifyService.searchAlbums(author)
            .subscribe(res => this.albums = res.albums.items)*/
        let url = "artists/";
        this.router.navigate([url, author]);
        
    }

    goToDetail(albumToPlay: Album): void {
        this.albums = null;
        this.SpotifyService.loadAlbum(albumToPlay.id)
            .subscribe(album => this.album = album)
    }

    playTrack(track: Track) : void{
        if (this.track && this.track.id === track.id) { return; }
        this.track = track;
        this.SpotifyAudio.playAudioTrack(track.preview_url)
    }

}