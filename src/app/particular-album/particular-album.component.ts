import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../model/album';
import { Track } from '../model/track';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SpotifyAPIService } from '../Services/spotify-api/spotify-api.service';
import 'rxjs/add/operator/switchMap';
import { SpotifyAudioService } from '../Services/spotify-audio/spotify-audio.service';
import { Router } from '@angular/router';
import config from '../web-config/config'


@Component({
    selector: 'particular-album',
    templateUrl: 'particular-album.component.html',
    styleUrls: ['particular-album.component.css']

})
export class ParticularAlbum implements OnInit{
    
    track: Track;
    album: Album;

    constructor(
        private SpotifyService: SpotifyAPIService,
        private route: ActivatedRoute,
        public SpotifyAudio: SpotifyAudioService,
        private router: Router
    ) { }


    playTrack(track: Track) : void {
        if (this.track && this.track.id === track.id) { return; }
        this.track = track;
        this.SpotifyAudio.playAudioTrack(track.preview_url);
    }


    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.SpotifyService.searchAlbum(params.get('id')))
            .subscribe((res:Album) => this.album = res);

    }

    searchArtists(author: string) : void {
        this.SpotifyAudio.pauseTrack();
        this.router.navigate([config.ARTISTS, author]);
    }

    goHome() : void {
        this.SpotifyAudio.pauseTrack();
        this.router.navigate([config.HOME]);
    }

}
