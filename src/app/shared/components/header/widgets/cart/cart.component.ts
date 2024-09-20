import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})

export class CartComponent {

  @Input() routePath : string;

  public cartItem = [
    {
      image_url: 'assets/images/product/vp-3.png',
      product_name: 'Egg Sandwich',
      price: '80.58',
      qty: 1
    },
    {
      image_url: 'assets/images/product/vp-2.png',
      product_name: 'Grilled Chicken Quesadilla',
      price: '25.64',
      qty: 1
    },
    {
      image_url: 'assets/images/product/vp-4.png',
      product_name: 'Spicy Ahi Roll',
      price: '12.00',
      qty: 1
    }
    ,
    {
      image_url: 'assets/images/product/vp-5.png',
      product_name: 'Spicy Dumplings',
      price: '16.28',
      qty: 1
    },
    {
      image_url: 'assets/images/product/vp-6.png',
      product_name: 'Chicken Nugget',
      price: '20.50',
      qty: 1
    }
  ]

}
