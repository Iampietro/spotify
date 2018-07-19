import { Component, Input, OnInit } from '@angular/core';
import { Artist } from '../Services/album-interface';
import { SpotifyAPIService } from '../Services/spotify-api.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
    selector: 'particularArtist',
    templateUrl: './particularArtist.component.html',
    styleUrls: ['/particularArtist.component.css']
})

export class ParticularArtist {

    @Input() artist: Artist;

    constructor() {}
    
}