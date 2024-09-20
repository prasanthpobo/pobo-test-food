import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cart } from '../interface/cart';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor(private http: HttpClient) { }

  getCart() :Observable<cart> {
    return this.http.get<cart>('assets/json/cart.json')
  }
}
