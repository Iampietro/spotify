import { Component, OnInit, ElementRef, Renderer2, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { Album } from '../model/album';
import { Track } from '../model/track';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SpotifyAPIService } from '../Services/spotify-api/spotify-api.service';
import 'rxjs/add/operator/switchMap';
import { SpotifyAudioService } from '../Services/spotify-audio/spotify-audio.service';
import { Router } from '@angular/router';
import config from '../web-config/config';


@Component({
    selector: 'particular-album',
    templateUrl: 'particular-album.component.html',
    styleUrls: ['particular-album.component.css']

})
export class ParticularAlbum implements OnInit {

    track: Track;
    album: Album;
    favorite: string[];
    isHidden: boolean;
    @ViewChild("searchInput", {read: ElementRef}) searchInput: ElementRef;
    innerWidth: any;

    constructor(
        private SpotifyService: SpotifyAPIService,
        private route: ActivatedRoute,
        public SpotifyAudio: SpotifyAudioService,
        private router: Router,
        private renderer: Renderer2
    ) {
        this.favorite = [];
    }

    @HostListener('window:resize', ['$event'])

    onResize(event) {
        this.innerWidth = window.innerWidth;
        if(this.innerWidth > 955) {
            this.searchInput.nativeElement.style.display = "block";
        }
        if(this.innerWidth < 956 && this.isHidden) {
            this.searchInput.nativeElement.style.display = "none";
        }
    }

    playTrack(track: Track): void {
        if (this.track && this.track.id === track.id) { return; }
        //this.track = track;
        this.SpotifyAudio.playAudioTrack(track.preview_url);
    }

    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.SpotifyService.searchAlbum(params.get('id')))
            .subscribe((res: Album) => this.album = res);
        const f = localStorage.getItem('favorites');
        if (f) {
            this.favorite = JSON.parse(f);
        }

    }

    searchArtists(author: string): void {
        this.SpotifyAudio.pauseTrack();
        this.router.navigate([config.ARTISTS, author]);
    }

    goHome(): void {
        this.SpotifyAudio.pauseTrack();
        this.router.navigate([config.HOME]);
    }

    addFavorite(trackID: string): void {
        if (this.favorite.includes(trackID)) {
            this.deleteFromFavorites(trackID);
        } else {
            this.favorite.push(trackID);
            localStorage.setItem('favorites', JSON.stringify(this.favorite));
        }

    }

    deleteFromFavorites(trackID: string) {
        let indexFavorite = this.favorite.indexOf(trackID);
        this.favorite = this.favorite.slice(0, indexFavorite)
            .concat(this.favorite.slice(indexFavorite + 1));
        localStorage.setItem('favorites', JSON.stringify(this.favorite));

    }

    orderByDuration(direction: number) {
        if (direction == 1) {
            this.album.tracks.items.sort(this.minToMax);
        }
        if (direction == 2) {
            this.album.tracks.items.sort(this.maxToMin)
        }
    }

    minToMax(a, b) {
        if (a.duration_ms < b.duration_ms)
            return -1;
        if (a.duration_ms > b.duration_ms)
            return 1;
        return 0;
    }

    maxToMin(a, b) {
        if (a.duration_ms > b.duration_ms)
            return -1;
        if (a.duration_ms < b.duration_ms)
            return 1;
        return 0;
    }

    display_search() : void {
        if(this.isHidden){
            this.searchInput.nativeElement.style.display = "block";
            this.isHidden = false;
            
        } else {
            this.searchInput.nativeElement.style.display = "none";
            this.isHidden = true;
        }        
    }

}
