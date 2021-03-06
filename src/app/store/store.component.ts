import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../model/cart.model';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public selectedCategory: any = null;
  public productsPerPage = 4;
  public selectedPage = 1;

  constructor(private repository: ProductRepository, private cart: Cart, private router: Router) { }

  ngOnInit(): void {
  }

  get products(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage
    return this.repository.getProducts(this.selectedCategory)
        .slice(pageIndex, pageIndex + this.productsPerPage);
}

  get categories(): string[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: string){
    this.selectedCategory = newCategory;
  }

  changePage(newPage: number){
    this.selectedPage = newPage;
  }

  changePageSize(newSize){
    this.productsPerPage = Number((newSize.target as HTMLInputElement).value);
    this.changePage(1);
  }

  get pageCount(): number {
    return Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage);
  }

  addProductToCart(product: Product){
    this.cart.addLine(product);
    this.router.navigateByUrl("/cart");
  }

  // potrzebne do *ngFor - przed dodaniem własnej dyrektywy 
  // get pageNumbers(): number[] {
  //   return Array(Math.ceil(this.repository
  //     .getProducts(this.selectedCategory).length / this.productsPerPage))
  //       .fill(0).map((x, i) => i+1);
  // }

}
