import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class SpotifyAPIService {

    constructor(private http: Http) { }

    searchAlbums(title: string) {
        const options = this.getOptions();
        return this.http.get(`https://api.spotify.com/v1/search?query=${title}&type=album`, options)
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

}