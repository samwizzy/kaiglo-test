import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product, Recommendations } from '../models/product';
import { NewArrivalsResponse } from '../models/homepage';
import { KaigloResponse, KaigloResponseSales } from '../models/kaiglo-response';

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

  getFeaturedProducts(
    page: number = 0
  ): Observable<Recommendations<Product[]>> {
    return this.http.get<Recommendations<Product[]>>(
      `${environment.BASE_URL}/product/featured?page=${page}`
    );
  }

  fetchNewArrivalProducts(): Observable<KaigloResponse<NewArrivalsResponse>> {
    return this.http.get<KaigloResponse<NewArrivalsResponse>>(
      `${environment.BASE_URL}/home-page/home-content-new-arrival`
    );
  }

  getOnSalesProducts(
    kaigloSale: string,
    page: number = 0
  ): Observable<KaigloResponseSales<Product[]>> {
    return this.http.get<KaigloResponseSales<Product[]>>(
      `${environment.BASE_URL}/product/on-sale/${kaigloSale}/${page}`
    );
  }
}
