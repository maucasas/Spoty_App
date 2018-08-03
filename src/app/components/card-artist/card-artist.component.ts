import { Component, OnInit, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-artist',
  templateUrl: './card-artist.component.html',
  styleUrls: ['./card-artist.component.css']
})
export class CardArtistComponent implements OnInit {
@Input() artist: any;
@Input() track: any;
  constructor() { }

  ngOnInit() {}

}
