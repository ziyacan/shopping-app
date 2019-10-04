import { Category } from './category';
import { Injectable, Inject } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {

constructor(
  private http: Http,
  @Inject("apiUrl") private apiUrl
) { }

url:string = this.apiUrl + "/categories";

getCategories():Observable<Category[]> {
  return this.http.get(this.url).pipe(map(response => response.json()));
}

}
