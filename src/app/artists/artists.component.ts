import { Component, Input, OnInit } from '@angular/core';
import { Artist } from '../Services/album-interface';
import { SpotifyAPIService } from '../Services/spotify-api.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
    selector: 'artists',
    templateUrl: './artists.component.html',
    styleUrls: ['./artists.component.css']
})

export class Artists implements OnInit {

    currentSearch: string;
    artist: string;
    artists: Artist[];

    constructor(
        private SpotifyService: SpotifyAPIService,
        private route: ActivatedRoute,
        public router: Router,
    ) {
        this.artist = "";
    }

    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.SpotifyService.searchArtists(params.get('search')))
            .subscribe(res => this.artists = res.artists.items);
        this.currentSearch = this.route.snapshot.params.particularArtist;
    }

    searchArtists(author: string) : void {
        this.currentSearch = author;
        /*this.SpotifyService.searchArtists(author)
            .subscribe(res => this.artists = res.artists.items)*/
        let url = "artists/";
        this.router.navigate([url, author]);
    }

    searchArtist(artistId: string) : void {
        let url = "artist/";
        this.router.navigate([url, artistId]);
    }

}