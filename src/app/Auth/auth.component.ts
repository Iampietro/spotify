import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Http, RequestOptions, Headers, Jsonp } from '@angular/http';

@Component({
  selector: 'authorization',
  template: '',
  styleUrls: []
})
export class AuthComponent implements OnInit {

  request: any = []
  answer: any = []

  scope = `user-follow-modify user-follow-read user-library-read user-library-modify
           user-read-private user-read-birthdate user-read-email user-top-read`;
  client_id = '08889519b4c24d199dcfa8a0c731c598';
  redirect_uri = 'http://localhost:8080/set-token';
  response_type = 'token';
  token: string;
  url1 = 'http://localhost:8080/home';
  url = 'https://accounts.spotify.com/authorize?' +
    'response_type=' + this.response_type +
    '&client_id=' + this.client_id +
    '&scope=' + this.scope +
    '&redirect_uri=' + this.redirect_uri

  constructor(private route: ActivatedRoute) { }



  ngOnInit() {
    
    window.location.href = this.url;
    let tokenRoute = this.route.fragment.value;
    let fragment1 = tokenRoute ? tokenRoute.match(/^(.*?)&/) : '';
    if (fragment1) {
      this.token = fragment1[1].replace('access_token=', '');
      localStorage.setItem('token', this.token)
      window.location.href = this.url1;
    }
  }

  getToken() : string {
    const token = localStorage.getItem('token');
    return token;
  }


}