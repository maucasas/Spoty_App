import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpBackend, HttpResponseBase } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {
  albums: any;
  credentialsSpotyApp: string;
  bearer = 'BQDqiAD4CJPti2x4ZMe6dpFAsLRSTUj3A2lGTkCpZX1QgVulJNrr5hUBNpYM2YwzezEVNIoVgBfmZ1m-xtQ';

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
    const headers = new HttpHeaders ({
      'Authorization': `Bearer ${this.bearer}`
    });
    return this.getQuery('browse/new-releases')
                        .pipe(map(data => data['albums'].items ));
  }

  getTrack(word: string) {
    return this.getQuery(`search?q=${word}&type=track&market=CO&limit=15`)
                    .pipe(map(data => data['tracks'].items ));
    }
  getArtist(word: string) {
        return this.getQuery(`search?q=${word}&type=artist&market=CO&limit=20`)
        .pipe(map(data =>  data['artists'].items));
      }
  getToken() {
      }
}
