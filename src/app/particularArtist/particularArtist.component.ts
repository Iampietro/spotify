import { Component, OnInit, EventEmitter } from '@angular/core';
import { Artist, Image, Album } from '../Services/album-interface';
import { SpotifyAPIService } from '../Services/spotify-api.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Router } from '@angular/router';


@Component({
    selector: 'particularArtist',
    templateUrl: './particularArtist.component.html',
    styleUrls: ['/particularArtist.component.css']
})

export class ParticularArtist implements OnInit {

    albums: Album[];

    constructor(private SpotifyService: SpotifyAPIService,
                private route: ActivatedRoute,
                public router: Router
        ) {
    }

    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.SpotifyService.searchArtist(params.get('artist')))
            .subscribe(res => this.albums = res.items);
    }

    searchArtists(artist: string) : void {
        let url = "artists/";
        this.router.navigate([url, artist]);
    }

    goToAlbum(albumId: string) : void {
        let url = "album/";
        this.router.navigate([url, albumId]);
    }
}