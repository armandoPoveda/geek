import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from './categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private url = "http://localhost:8080/api/categories";

  constructor(private http:HttpClient) { }

  getAll():Observable<Categories[]>{
    // console.log(this.http.get<Categories[]>(this.url))
    return this.http.get<Categories[]>(this.url);
  }
}
