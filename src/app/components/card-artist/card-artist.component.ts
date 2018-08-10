import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-card-artist',
  templateUrl: './card-artist.component.html',
  styleUrls: ['./card-artist.component.css']
})
export class CardArtistComponent implements OnInit {
@Input() artist: any;
@Input() track: any;
  constructor( private router: Router) {
   }

  ngOnInit() {}

  verArtista( item: any ) {
    let id: any;
    if (item.type === 'artist') {
          id = item.id;
    } else {
      id = item.id;
    }
     this.router.navigate( ['/artist', item.id] );
   }

}
