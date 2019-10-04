import { Product } from './product';
import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: Http,
    @Inject('apiUrl') private apiUrl
  ) { }

  getProducts(seoUrl: string) {
    if (seoUrl) {
      return this.http.get(this.apiUrl + "/products/" + seoUrl)
        .pipe(map(res => res.json()));
    } else {
      return this.http.get(this.apiUrl + "/products")
        .pipe(map(res => res.json()));
    }
  }

  addToCart() {

  }

}
