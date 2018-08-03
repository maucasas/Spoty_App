import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
// la siguiente linea importa un modulo para realizar peticiones http
import {HttpClientModule} from '@angular/common/http';
// Rutas
import { ROUTES } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CardArtistComponent } from './components/card-artist/card-artist.component';

// custom pipes
import { NoImagesPipe } from './pipes/no-images.pipe';

// Services

import { SpotifyService } from './services/spotify.service';
import { LoadingComponent } from './components/shared/loading/loading.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    CardArtistComponent,
    NoImagesPipe,
    LoadingComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
