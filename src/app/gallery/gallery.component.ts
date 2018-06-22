import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  employee: {
    id: number,
    name: string
  };

  photos = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.employee = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };

  }

}
