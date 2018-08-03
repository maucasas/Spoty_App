import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent  {

  nuevasCanciones: any [] = [''];
  loading: boolean;
  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.getNewReleases();
   }

getNewReleases() {
  this.spotify.getNewReleases().subscribe((data: any) => {console.log(data); this.nuevasCanciones = data; });
  this.loading = false;
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
