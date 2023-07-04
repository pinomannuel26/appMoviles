import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LosSimpsonService {

  constructor(private http: HttpClient) { }

  getCharacters(params: any){
    return this.http.get(environment.baseUrl, {params})
  }

  getFilterCharacters(filter: any, params : any){
    console.log(environment.baseUrl + environment.filter + filter )
    return this.http.get(environment.baseUrl + environment.filter + filter + "/")
  }

  getCharactersByID(id: string){
    return this.http.get(environment.baseUrl + environment.filter +'"'+ id+'"');
  }
}
