import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthComponent } from './Auth/auth.component'
import { Home } from './home/home.component'
import { ParticularAlbum } from './particular-album/particular-album.component'
import { Artists } from './artists/artists.component';
import { ParticularArtist } from './particular-artist/particularArtist.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'set-token' },
  { path: 'set-token', component: AuthComponent },
  { path: 'home', component: Home },
  { path: 'album/:id', component: ParticularAlbum },
  { path: 'artists/:search', component: Artists },
  { path: 'artist/:artist', component: ParticularArtist}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

