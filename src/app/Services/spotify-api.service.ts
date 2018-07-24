import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Jsonp } from '@angular/http';

@Injectable()
export class SpotifyAPIService {

    constructor(private http: Http) { }

    searchAlbum(albumId: string) {
        const options = this.getOptions();
        return this.http.get(`https://api.spotify.com/v1/albums/${albumId}`, options)
            .map(res => res.json())
    }


    private getOptions() {
        let token = localStorage.getItem('token');
        let header = new Headers();
        header.append('Authorization', 'Bearer ' + token);
        let options = new RequestOptions({ headers: header });

        return options;
    }

    loadAlbum(id: string) {
        const options = this.getOptions();
        return this.http.get(`https://api.spotify.com/v1/albums/${id}`, options)
            .map(res => res.json())
    }

    searchArtists(severalArtistsSearch: string) {
        const options = this.getOptions();
        return this.http.get(`https://api.spotify.com/v1/search/?query=${severalArtistsSearch}&offset=0&limit=20&type=artist`, options)
            .map(res => res.json())
    }

    searchArtist(artistId) {
        const options = this.getOptions();
        return this.http.get(`https://api.spotify.com/v1/artists/${artistId}/albums`, options)
            .map(res => res.json())
    }

}