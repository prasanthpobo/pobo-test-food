import { Component, Input } from '@angular/core';
import { cart } from '../../../interface/cart';
import { CartService } from '../../../services/cart.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-order-cart-items',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './order-cart-items.component.html',
  styleUrl: './order-cart-items.component.scss'
})

export class OrderCartItemsComponent {

  public cartItem: cart;
  @Input() title: boolean;
  @Input() buttonTitle: string;

  constructor(public cartServices: CartService) { }

  ngOnInit() {
    this.cartServices.getCart().subscribe(res => {
      this.cartItem = res;
      this.calculateSubTotal();
    })
  }

  increaseDecrease(i: number, qty: number) {
    this.cartItem.data.forEach((item) => {
      if (item.id == i) {
        if (qty == -1 && item.qty > 1) {
          item.qty -= 1;
        } else if (qty == 1) {
          item.qty += 1;
        }
        this.calculateSubTotal();
      }
    })
  }

  calculateSubTotal() {
    this.cartItem.sub_total = this.cartItem.data.reduce((total, product) => {
      product.totalPrice = product.qty * product.price;
      return total + product.totalPrice;
    }, 0);
    this.cartItem.discount_price = ((this.cartItem.sub_total * this.cartItem.discount) / 100);
    this.cartItem.to_pay = this.cartItem.sub_total - this.cartItem.discount_price;
  }
}
