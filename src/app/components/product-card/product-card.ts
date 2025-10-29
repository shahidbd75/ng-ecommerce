import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product';
import { CurrencyPipe } from '@angular/common';
import { MatButton } from "@angular/material/button";
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe, MatButton, MatIcon],
  template: `
    <div class="bg-white cursor-pointer rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
        <img [src]="product().imageUrl" [alt]="product().name" class="w-full h-[300px] object-cover rounded-t-xl"/>

        <div class="p-5 flex flex-col flex-1">
            <h3 class="text-lg font-semibold text-gray-900 leading-tight mb-2">{{ product().name }}</h3>
            <p class="text-sm text-gray-600 mb-4 flex-1 leading-relaxed">{{ product().description }}</p>
            <!-- add rating component -->
             <div class="text-sm font-medium mb-4">
              {{ product().inStock ? 'In Stock' : 'Out of Stock' }}
             </div>

             <div class="flex items-center justify-between mt-auto">
              <span class="text-2xl font-bold text-gray-900">{{ product().price | currency }}</span>
              <button matButton="filled" class="flex items-center gap-2" (click)="addToCart()">
                <mat-icon>add_shopping_cart</mat-icon>  
                Add to Cart
              </button>
             </div>
        </div>
    </div> 
  `,
})
export class ProductCard {
  product = input.required<Product>();
  addToCartClicked = output<Product>();

  addToCart() {
    this.addToCartClicked.emit(this.product());
  }
}
