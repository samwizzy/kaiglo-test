import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { forkJoin, of, switchMap } from 'rxjs';
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
}
