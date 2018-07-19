import { Component, Input, OnInit } from '@angular/core';
import { Artist } from '../Services/album-interface';
import { SpotifyAPIService } from '../Services/spotify-api.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
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
    ) {
        this.artist = "";
    }

    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.SpotifyService.searchArtists(params.get('particularArtist')))
            .subscribe(res => this.artists = res.artists.items);
        this.currentSearch = this.route.snapshot.params.particularArtist;
    }

    searchArtists(author: string) {
        this.currentSearch = author;
        this.SpotifyService.searchArtists(author)
            .subscribe(res => this.artists = res.artists.items)
    }

}