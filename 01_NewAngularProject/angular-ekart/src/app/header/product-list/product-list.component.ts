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
      inStock: 5,
      image: 'https://media.croma.com/image/upload/v1662424212/Croma%20Assets/Communication/Mobiles/Images/234252_czgdvc.png'
    }

    customerName = "Manthan";

    addToCart: number = 0;
    disableDecrementButton: boolean = true;
    disableIncrementButton: boolean = false;

    getDiscount() {
      //In order to access an object we need to specify this. keyword to point our funtion to use object inside this class
      return this.product.price - (this.product.price * this.product.discount) /100
    }
    
    onNameChanged(event: any){
      // console.log(event);
      // console.log(event.target.value);
      // this.customerName = event.target.value;
    }

    decreaseQuantity(){
      if(this.addToCart > 0)
      {
        this.addToCart -= 1;
        this.disableDecrementButton = false;
        this.disableIncrementButton = false;
      }
      if(this.addToCart == 0)
      {
        this.disableDecrementButton = true;
      }
    }
    
    increaseQuantity(){
      if(this.addToCart < this.product.inStock)
      {
        this.addToCart += 1;
        this.disableIncrementButton = false;
        this.disableDecrementButton = false;
      }
      if(this.addToCart == this.product.inStock)
      {
        this.disableIncrementButton = true;
      }
    }
}
