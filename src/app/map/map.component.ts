import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  lat = 54.521217;
  lng = 18.537538;
  zoom = 17;

  constructor() { }

  ngOnInit() {
  }

}
