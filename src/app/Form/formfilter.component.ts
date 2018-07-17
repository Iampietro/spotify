import { Component, OnInit, EventEmitter, Output, Input, } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';




@Component({
  selector: 'form-filter',
  templateUrl: './form-filter.component.html',
  styleUrls: []
})

export class FormFilter  {
  //constructor(private _http: Http){}
  
  @Input() text = '';
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  /*
  ngOnInit(){
  	this.getArtists('https://api.spotify.com/v1/search', 'la renga', 'artist');
  }

  public getArtists(api: string, Options: any, type: any): Promise<any> {
    api = api + '?q=' + Options + '&type=' + type
    let headers = new Headers({
      'Accept': 'application/json'
    })
    let token = localStorage.getItem('token');
    if (token) {
      headers.append('Authorization', 'Bearer ' + token);
    }
    return this._http.get(api, { headers: headers, body: '' }).map((response) => response.json())
      .toPromise()
  }
  */


}
