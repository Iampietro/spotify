import { Component, OnInit, Input } from '@angular/core';
import { Album, Track } from '../Services/album-interface';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SpotifyAPIService } from '../Services/spotify-api.service';
import 'rxjs/add/operator/switchMap';
import { SpotifyAudioService } from '../Services/spotify-audio.service';
import { Router } from '@angular/router';
import { FormFilter } from '../Form/formfilter.component';



@Component({
    selector: 'particular-album',
    templateUrl: 'particular-album.component.html',
    styleUrls: ['particular-album.component.css']

})
export class ParticularAlbum implements OnInit{
    
    track: Track;
    artist = "";
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
        this.SpotifyAudio.playAudioTrack(track.preview_url)
    }


    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.SpotifyService.searchAlbum(params.get('id')))
            .subscribe(res => {this.album = res; console.log(res)});

    }

    searchArtists(author: string) : void {
        let url = "artists/";
        this.router.navigate([url, author]);
    }

}
