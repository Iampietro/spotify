import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from "./Auth/auth.component";
import { FormFilter } from './Form/formfilter.component'
import { SpotifyAPIService } from './Services/spotify-api.service';
import { Home } from './home.component';
import { AlbumListComponent } from './Spotify/album-list.component';
import { AlbumListItemComponent } from './Spotify/album-list-item.component';
import { TrackListComponent } from './Spotify/track-list.component';
import { SecsToTimePipe } from './Pipes/secs-to-time.pipe';
import { SpotifyAudioService } from './Services/spotify-audio.service';
import { ParticularAlbum } from './particular-album.component';
import { Artists } from './artists/artists.component';
import { ParticularArtist } from './particularArtist/particularArtist.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    FormFilter,
    Home,
    AlbumListComponent,
    AlbumListItemComponent,
    TrackListComponent,
    SecsToTimePipe,
    ParticularAlbum,
    Artists,
    ParticularArtist
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [
    SpotifyAPIService,
    SpotifyAudioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
