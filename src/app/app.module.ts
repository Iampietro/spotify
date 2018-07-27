import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from "./Auth/auth.component";
import { FormFilter } from './form/form-filter.component'
import { SpotifyAPIService } from './Services/spotify-api/spotify-api.service';
import { Home } from './home/home.component';
import { SpotifyAudioService } from './Services/spotify-audio/spotify-audio.service';
import { ParticularAlbum } from './particular-album/particular-album.component';
import { Artists } from './artists/artists.component';
import { ParticularArtist } from './particular-artist/particularArtist.component';
import { FavoriteSongs } from './favorite-songs/favorite-songs.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from './interceptors/my-interceptor';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth-service/auth-service.service';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    FormFilter,
    Home,
    ParticularAlbum,
    Artists,
    ParticularArtist,
    FavoriteSongs
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [
    SpotifyAPIService,
    SpotifyAudioService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
