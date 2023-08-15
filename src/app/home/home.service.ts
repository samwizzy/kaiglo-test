import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product, Recommendations } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getProducts(page: number): Observable<Recommendations<Product[]>> {
    return this.http.get<Recommendations<Product[]>>(
      `${environment.BASE_URL}/product/home-recommendation/${page}`
    );
  }
}
