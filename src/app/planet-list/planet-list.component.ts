import { Component, OnInit } from '@angular/core';
import { PlanetListService } from './service/planet-list.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {
planetList;
  constructor(private planetListService: PlanetListService ) { }

  ngOnInit(): void {
this.planetListService.getPlanetList().subscribe(data => {
  this.planetList = data;
})
  }

}
