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
import { Product } from '../models/product';
import { Constant } from '../enums/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService) {}
  products!: Product[];
  sliders!: any[];
  featuredProducts$: Observable<Product[]> = this.getFeaturedProducts();
  newArrivals$: Observable<Product[]> = this.getNewArrivalsProducts();
  groupBuyProducts$: Observable<Product[]> = this.fetchOnSales('GROUP_BUY');

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
          Object.values(data).map((record) => {
            result.push(...record.content);
          });
          return of(result);
        })
      )
      .subscribe((response) => {
        this.products = response;
        let cacheData = JSON.stringify(response);
        localStorage.setItem(Constant.HPRECO, cacheData);
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
}
