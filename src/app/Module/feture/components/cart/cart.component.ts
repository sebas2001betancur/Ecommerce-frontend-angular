import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/Models/AppState';
import { CartService } from 'src/app/State/Cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cart = [1, 1, 1];
  cartItems:any;

  constructor(private router: Router,
     private cartService:CartService,
     private store:Store<AppState>,) {}

//2:14:58
  ngOnInit(){
   this.cartService.getCart()

   this.store.pipe(select((store) => store.cart)).subscribe((cart) => {
    this.cartItems = cart.cartItems;
    console.log("cart store ", cart.cartItems)
    })
  }

  navigateToCheckout() {
    this.router.navigate(['checkout']);
  }
}
