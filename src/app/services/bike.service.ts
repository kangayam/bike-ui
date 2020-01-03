import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import {observable} from 'rxjs/observable';


const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private http:HttpClient) { }
  //constructor() { }

  getBikes(){

    return this.http.get('/server/api/v1/bikes');
  }
}
