import { Component, computed, input, signal } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsData } from '../../data/products';
import { ProductCard } from '../../components/product-card/product-card';
import { MatSidenav, MatSidenavContent, MatSidenavContainer } from '@angular/material/sidenav';
import { MatListItem, MatNavList, MatListItemTitle } from '@angular/material/list';
import { RouterLink } from "@angular/router";
import { TitleCasePipe } from '@angular/common';
@Component({
  selector: 'app-products-grid',
  imports: [ProductCard, MatSidenav, MatSidenavContent, MatSidenavContainer, MatNavList, MatListItem, MatListItemTitle, RouterLink, TitleCasePipe],
  templateUrl: './products-grid.html',
  styles: ``,
})
export default class ProductsGrid {
  category = input<string>('all');


  products = signal<Product[]>(ProductsData);

  categories = signal<string[]>(['all', ...new Set(this.products().map(p => p.category))]);

  filteredProduct = computed(() => {
    if(this.category() === 'all') return this.products();

    return this.products().filter(p => p.category.toLowerCase() === this.category().toLowerCase());
  });

  addToCart(product: Product) {
    console.log(product);
  }
}
