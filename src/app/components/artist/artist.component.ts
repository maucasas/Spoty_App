import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
artistID: string;
result: any = {};
loading: boolean;
externalUrl: string;
tracks: any [];
  constructor(private spotifyService: SpotifyService, private activatedRoute: ActivatedRoute) {
    this.loading = true;
    this.activatedRoute.params.subscribe((params) => {
  this.artistID = params['id'];
  this.getArtistByID(this.artistID),
  this.getTopTracks(this.artistID);
  this.loading = false;
    });
}

  ngOnInit() {
  }
getArtistByID(id: string) {
  this.spotifyService.getArtistByID(id).subscribe((resp: any) => { this.result = resp;
      this.externalUrl = resp.external_urls.spotify; } );
}
getTopTracks(id: string) {
  this.spotifyService.getTopTracks(id)
                .subscribe((respTracks: any) => {this.tracks = respTracks; console.log(this.tracks); } );
}

}
