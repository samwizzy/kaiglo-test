import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import {
  Observable,
  filter,
  forkJoin,
  map,
  of,
  shareReplay,
  switchMap,
} from 'rxjs';
import { Product } from '../../models/product';
import { SlidersResponse } from '../../models/homepage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService) {}
  products!: Product[];
  slider$: Observable<SlidersResponse> = this.getHomeSliders();
  featuredProducts$: Observable<Product[]> = this.getFeaturedProducts();
  newArrivals$: Observable<Product[]> = this.getNewArrivalsProducts();
  groupBuyProducts$: Observable<Product[]> = this.fetchOnSales('GROUP_BUY');
  appDeals$: Observable<Product[]> = this.fetchOnSales('APP_ONLY_DEALS');

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    forkJoin({
      0: this.homeService.getProducts(0),
      1: this.homeService.getProducts(1),
      2: this.homeService.getProducts(2),
      3: this.homeService.getProducts(3),
    })
      .pipe(
        switchMap((data) => {
          let result: Product[] = [];
          Object.values(data).forEach((record) => {
            result.push(...record.content);
          });
          return of(result);
        })
      )
      .subscribe((response) => {
        this.products = response;
      });
  }

  getFeaturedProducts() {
    return this.homeService
      .getFeaturedProducts()
      .pipe(map((res) => res.content));
  }

  getNewArrivalsProducts() {
    return this.homeService
      .fetchNewArrivalProducts()
      .pipe(map((res) => res.response.newArrivals));
  }

  fetchOnSales(kaigloSale: string): Observable<Product[]> {
    return this.homeService.getOnSalesProducts(kaigloSale, 0).pipe(
      map((res) => res.content),
      filter((content) => content.length > 0),
      shareReplay(1)
    );
  }

  getHomeSliders() {
    return this.homeService.fetchHomeSliders().pipe(map((res) => res.response));
  }
}
