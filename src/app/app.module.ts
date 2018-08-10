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
import { ArtistComponent } from './components/artist/artist.component';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';
import { ErrorsComponent } from './components/errors/errors.component';

// angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    CardArtistComponent,
    NoImagesPipe,
    LoadingComponent,
    ArtistComponent,
    DomSeguroPipe,
    ErrorsComponent,
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash: true}),
    BrowserAnimationsModule,
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent],
})
export class AppModule { }
