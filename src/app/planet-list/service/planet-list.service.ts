import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanetListService {

  constructor(private http: HttpClient) { }

  public getPlanetList(){
    return this.http.get(`https://assignment-machstatz.herokuapp.com/planet`);
  }
  
}



