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
tagArtist = true;
tracks: any [] = [];
tagTracks = true;
loading: boolean;
empty = false;
  constructor( private spotyService: SpotifyService) {
   }

  ngOnInit() {
  }
searchArtist(word: any) {
  this.loading = true;
  this.tagTracks = false;
  this.tagArtist = true;
  this.spotyService.getArtists( word ).subscribe((resp: any) => {
  this.artists = resp;
  console.log(this.artists);
  if (resp == null) {
      this.empty = true;
  }
  this.loading = false;
  });
}
searchTrack(word: any) {
  this.loading = true;
  this.tagArtist = false;
  this.tagTracks = true;
  this.spotyService.getTrack(word).subscribe((resp: any) => {
  this.tracks = resp;
  console.log(this.tracks);
  this.loading = false;
  });
}
  getToken() {

  }



}
