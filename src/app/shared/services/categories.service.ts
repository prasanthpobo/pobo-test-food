import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { categories } from '../interface/categories';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getCategories() :Observable<categories> {
    return this.http.get<categories>('assets/json/categories.json')
  }

}
