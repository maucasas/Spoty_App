import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpBackend, HttpResponseBase } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {
  bearer = 'QCX9jJUAp_LI73bFxLWy52b62dh7VIoL2J4DzPOYQ9korz-88rbTo5qJR4Ca0nzL_kHlJE_VYD1AqeFpFU';


  constructor(private http: HttpClient) {
    console.log('Spotify Service listo');
   }
  getQuery(query: string) {
      const url = `https://api.spotify.com/v1/${query}`;

      const headers = new HttpHeaders ({
        'Authorization': `Bearer ${this.bearer}`});
        return this.http.get(url, {headers});
   }
  getNewReleases() {
    return this.getQuery('browse/new-releases')
                        .pipe(map(data => data['albums'].items ));
  }

  getTrack(word: string) {
    return this.getQuery(`search?q=${word}&type=track&market=CO&limit=15`)
                    .pipe(map(data => data['tracks'].items ));
    }
  getArtists(word: string) {
        return this.getQuery(`search?q=${word}&type=artist&market=CO&limit=20`)
        .pipe(map(data =>  data['artists'].items));
      }
  getArtistByID(id: string) {
   return this.getQuery(`artists/${id}`);
  }
  getTopTracks (id: string) {
    return this.getQuery(`artists/${ id }/top-tracks/?country=us`)
              .pipe(map(tracks => tracks['tracks'] ) );
  }
}
