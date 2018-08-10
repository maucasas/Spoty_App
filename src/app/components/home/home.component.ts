import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent  {

  nuevasCanciones: any [] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;
  constructor(private spotifyService: SpotifyService) {
    this.loading = true;
    this.spotifyService.getNewReleases()
    .subscribe((data: any) => { this.nuevasCanciones = data; }, (errorApiSpotify) => {
       this.mensajeError = errorApiSpotify.error.error.message;
       this.error = true;
       console.log('Informacion de Error:', this.mensajeError);
    this.loading = false;
     });
  }
}


/* export class HomeComponent implements OnInit {
  paises: any [] = [];
    constructor(private http: HttpClient) {
      this.http.get('https://restcountries.eu/rest/v2/lang/es')
      .subscribe((resp: any) => {
        this.paises = resp;
        console.log(resp);
      });
     }
    ngOnInit() {
    }
  }
*/
