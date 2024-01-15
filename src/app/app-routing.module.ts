import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { navigation } from 'src/Data/navigation';
import { HomeComponent } from './Module/feture/components/home/home.component';
import { ProductsComponent } from './Module/feture/components/products/products.component';
import { CartComponent } from './Module/feture/components/cart/cart.component';
import { ProductDetailsComponent } from './Module/feture/components/product-details/product-details.component';
import { CheckoutComponent } from './Module/feture/components/checkout/checkout.component';
import { PaymentComponent } from './Module/feture/components/payment/payment.component';
import { PaymentSuccessComponent } from './Module/feture/components/payment-success/payment-success.component';
import { OrderComponent } from './Module/feture/components/order/order.component';
import { OrderDetailsComponent } from './Module/feture/components/order-details/order-details.component';
import { AdminRoutingModule } from './Module/admin/admin-routing.module';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./Module/admin/admin-routing.module').then(
        (m) => AdminRoutingModule
      ),
  },
  { path: '', component: HomeComponent },
  //{ path: 'product', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'checkout/payment/:id', component: PaymentComponent },
  { path: ':lavelOne/:lavelTwo/:lavelThree', component: ProductsComponent },
  { path: 'payment-success', component: PaymentSuccessComponent },
  { path: 'account/orders', component: OrderComponent },
  { path: 'order/:id', component: OrderDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
