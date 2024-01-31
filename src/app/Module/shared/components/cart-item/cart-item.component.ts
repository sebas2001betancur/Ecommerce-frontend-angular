import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/State/Cart/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {

  @Input() cartItem:any;
  @Input() showButton: any;

  constructor(
    private cartService:CartService,
  ){

  }

  updateCartItem(num: number) {
    console.log('num', num);
    this.cartService.updateCartItem({
      cartItemId: this.cartItem.id,
      data:{quantity:num+this.cartItem.quantity},

      //2:43:00
    })

  }

  removeCartItem() {
    console.log('remove cart item');
    this.cartService.removeCartItem(this.cartItem.id);
  }
}
