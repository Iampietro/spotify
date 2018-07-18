import { Component } from '@angular/core';
import { FormFilter } from './Form/formfilter.component';
import { SpotifyAPIService } from './Services/spotify-api.service';
import { Album, Track } from './Services/album-interface';
import { SpotifyAudioService } from './Services/spotify-audio.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: []
})

export class Home {
    artist = "Sepultura";
    albums: Album[];
    album: Album;
    track: Track;
    spotifyAudioSubscription: Subscription;

    constructor(public SpotifyService: SpotifyAPIService,
        public SpotifyAudio: SpotifyAudioService,
        public router: Router,
        private route: ActivatedRoute,) {
        this.searchAlbums(this.artist);
        this.spotifyAudioSubscription = SpotifyAudio.ended$.subscribe(() => this.album = null)
    }

    searchAlbums(author: string) {
        this.album = null;
        this.SpotifyService.searchAlbums(author)
            .subscribe(res => this.albums = res.albums.items)
    }

    goToDetail(albumToPlay: Album): void {
        //this.router.navigate(['/album', albumToPlay.id]);
        this.albums = null;
        this.SpotifyService.loadAlbum(albumToPlay.id)
            .subscribe(album => this.album = album)
    }

    playAlbum(albumToPlay: Album) {
        this.SpotifyService.loadAlbum(albumToPlay.id)
            .subscribe(album => {
                this.album = album;
                this.playTrack(album.tracks.items[0]);
            })
    }

    playTrack(track: Track) {
        if (this.track && this.track.id === track.id) { return; }
        this.track = track;
        this.SpotifyAudio.playAudioTrack(track.preview_url)
    }

    closeModal() {
        this.album = null;
        this.track = null;
        this.SpotifyAudio.pauseTrack();
    }

    ngOnDestroy() {
        this.spotifyAudioSubscription.unsubscribe();
        this.SpotifyAudio.destroy();
    }


}