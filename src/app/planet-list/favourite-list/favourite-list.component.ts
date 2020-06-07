import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.component.html',
  styleUrls: ['./favourite-list.component.css']
})
export class FavouriteListComponent implements OnChanges {
  @Input() list;
  favouiteList = [];
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.favouiteList = changes.list.currentValue
  };

}
