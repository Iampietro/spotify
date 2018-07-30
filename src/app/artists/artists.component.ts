import { Component, ElementRef, Renderer2, ViewChild, AfterViewInit, HostListener, OnInit } from '@angular/core';
import { Artist } from '../model/artist';
import { SpotifyAPIService } from '../Services/spotify-api/spotify-api.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import config from '../web-config/config';


@Component({
    selector: 'artists',
    templateUrl: './artists.component.html',
    styleUrls: ['./artists.component.css']
})

export class Artists implements OnInit {

    currentSearch: string;
    artists: Artist[];
    artist: string;
    @ViewChild("searchInput", { read: ElementRef }) searchInput: ElementRef;
    innerWidth: any;
    isHidden: boolean;

    constructor(
        private SpotifyService: SpotifyAPIService,
        private route: ActivatedRoute,
        public router: Router,
        private renderer: Renderer2
    ) {
        this.artist = '';
        this.isHidden = true;
    }

    @HostListener('window:resize', ['$event'])

    onResize(event) {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth > 955) {
            this.searchInput.nativeElement.style.display = "block";
        }
        if (this.innerWidth < 956 && this.isHidden) {
            this.searchInput.nativeElement.style.display = "none";
        }
    }

    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.SpotifyService.searchArtists(params.get('search')))
            .subscribe(res => this.artists = res.artists.items);
        this.currentSearch = this.route.snapshot.params.search;
    }

    searchArtists(author: string): void {
        this.currentSearch = author;
        this.router.navigate([config.ARTISTS, author]);
    }

    searchArtist(artistId: string): void {
        this.router.navigate([config.ARTIST, artistId]);
    }

    goHome(): void {
        this.router.navigate([config.HOME]);
    }

    display_search(): void {
        if (this.isHidden) {
            this.searchInput.nativeElement.style.display = "block";
            this.isHidden = false;

        } else {
            this.searchInput.nativeElement.style.display = "none";
            this.isHidden = true;
        }
    }

}