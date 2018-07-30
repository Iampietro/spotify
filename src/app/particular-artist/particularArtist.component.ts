import { Component, OnInit, ElementRef, Renderer2, ViewChild, AfterViewInit, HostListener   } from '@angular/core';
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

export class ParticularArtist implements OnInit, AfterViewInit {

    albums: Album[];
    isHidden: boolean;
    @ViewChild("searchInput", {read: ElementRef}) searchInput: ElementRef;
    innerWidth: any;

    constructor(private SpotifyService: SpotifyAPIService,
                private route: ActivatedRoute,
                public router: Router,
                private SpotifyAudio: SpotifyAudioService,
                private renderer: Renderer2
        ) {
            this.isHidden = true;
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

    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.SpotifyService.searchArtistAlbums(params.get('artist')))
            .subscribe(res => this.albums = res.items);
        this.innerWidth = window.innerWidth;
    }

    ngAfterViewInit() : void {
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