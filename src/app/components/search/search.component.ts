import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
artists: any [] = [];
tracks: any;
loading: boolean;
empty = false;
  constructor( private spotyService: SpotifyService) {
   }

  ngOnInit() {
  }

  searchTrack(word: any) {
    this.loading = true;
    this.spotyService.getTrack(word).subscribe((resp: any) => {
      this.tracks = resp;
      this.loading = false;
    });
  }
searchArtist(word: any) {
  this.loading = true;
  this.spotyService.getArtist( word ).subscribe((resp: any) => {
  this.artists = resp;
  if (resp == null) {
      this.empty = true;
  }
  this.loading = false;
  });
}
  getToken() {

  }



}
