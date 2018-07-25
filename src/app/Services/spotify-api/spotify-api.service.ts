import { Injectable } from '@angular/core';
import config from '../../web-config/config'
import { HttpClient } from '@angular/common/http';
import { Album } from '../../model/album';
import { Artist } from '../../model/artist';
import { Observable } from 'rxjs/Observable';
import { Albums } from '../../model/albums';

@Injectable()
export class SpotifyAPIService {

    constructor(
        private http: HttpClient
    ) { }

    searchAlbum(albumId: string) : Observable<Album> {
        return this.http.get<Album>(config.URL_ALBUMS + albumId)
    }    

    loadAlbum(id: string)  : Observable<Album> {
        return this.http.get<Album>(config.URL_ALBUMS + id)
    }

    searchArtists(severalArtistsSearch: string) : Observable<Artist[]> {
        return this.http.get<Artist[]>(config.URL_SEARCH_ARTISTS + severalArtistsSearch + config.ARTISTS_SEARCH_SETTINGS)
    }

    searchArtistAlbums(artistId) : Observable<Albums> {
        return this.http.get<Albums>(config.URL_SEARCH_ARTIST_ALBUMS + artistId + config.ARTIST_ALBUMS_SETTINGS)
    }

}