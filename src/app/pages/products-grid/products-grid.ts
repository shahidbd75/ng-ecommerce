import { Component, computed, input, signal } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsData } from '../../data/products';
import { ProductCard } from '../../components/product-card/product-card';

@Component({
  selector: 'app-products-grid',
  imports: [ProductCard],
  templateUrl: './products-grid.html',
  styles: ``,
})
export default class ProductsGrid {
  category = input<string>('all');


  products = signal<Product[]>(ProductsData);

  filteredProduct = computed(() => {
    if(this.category() === 'all') return this.products();

    return this.products().filter(p => p.category.toLowerCase() === this.category().toLowerCase());
  });

  addToCart(product: Product) {
    console.log(product);
  }
}
