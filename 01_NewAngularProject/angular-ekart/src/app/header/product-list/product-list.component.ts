import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
    name: string = 'Iphone 13';
    color: string = 'Red';
    price: number = 999;

    product = {
      name: 'Iphone 15',
      color:'Blue',
      price: 995,
      discount: 10,
      inStock: 0
    }

    getDiscount() {
      //In order to access an object we need to specify this. keyword to point our funtion to use object inside this class
      return this.product.price - (this.product.price * this.product.discount) /100
    }
    
}
