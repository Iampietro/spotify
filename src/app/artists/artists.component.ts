import { Component, Input, OnInit } from '@angular/core';
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

    constructor(
        private SpotifyService: SpotifyAPIService,
        private route: ActivatedRoute,
        public router: Router,
    ) {
        this.artist = '';
     }

    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.SpotifyService.searchArtists(params.get('search')))
            .subscribe(res => this.artists = res.artists.items);
        this.currentSearch = this.route.snapshot.params.search;
    }

    searchArtists(author: string) : void {
        this.currentSearch = author;
        this.router.navigate([config.ARTISTS, author]);
    }

    searchArtist(artistId: string) : void {
        this.router.navigate([config.ARTIST, artistId]);
    }

    goHome() : void {
        this.router.navigate([config.HOME]);
    }

}