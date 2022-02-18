import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url = "http://localhost:8080/api/clients";

  constructor(private http:HttpClient) { }

  getAll():Observable<Client[]>{
    console.log(this.http.get<Client[]>(this.url))
    return this.http.get<Client[]>(this.url);
  }
  
  get(id:number):Observable<Client>{
    return this.http.get<Client>(this.url+ '/' + id);
  }
  
}
