import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthComponent } from './Auth/auth.component'
import { Home } from './home.component'
import { ParticularAlbum } from './particular-album.component'


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'set-token' },
  { path: 'set-token', component: AuthComponent },
  { path: 'home', component: Home },
  { path: 'home/:author', component: Home },
  { path: 'album/:id', component: ParticularAlbum }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

