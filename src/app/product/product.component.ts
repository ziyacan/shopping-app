import { Pager } from './../app.pager';
import { CartService } from './../cart/cart.service';
import { NotificationsService } from 'angular2-notifications';
import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];
  addedProduct: string;
  filterText: any;
  pager:Pager = new Pager();

  constructor(
    private productService: ProductService,
    private notificationsService: NotificationsService,
    private cartService: CartService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getProducts(params["seoUrl"])
    });
  }

  getProducts(seoUrl: string) {
    this.productService.getProducts(seoUrl)
    .subscribe(p => {
      this.products = p;
      this.pager = this.getPager(p.length);
    });
  }

  addToCart(product: Product) {
    this.addedProduct = product.productName;
    this.cartService.addToCart(product);
    this.notificationsService.success("Succesfully", product.productName + " added to cart")
  }

  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 3): Pager {
    let totalPages = Math.ceil(totalItems / pageSize);
    let pages: Array<number> = [];
    for(let i =1; i<=totalPages; i++){
      pages.push(i);
    }

    var pager = new Pager();
    pager.currentPage = currentPage;
    pager.pageList = pages;
    pager.pageSize = pageSize;
    return pager;
  }

  setPage(page: number) {
    this.pager.currentPage = page;
  }


}
