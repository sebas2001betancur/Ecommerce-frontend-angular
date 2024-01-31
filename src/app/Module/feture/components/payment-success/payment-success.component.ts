import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/Models/AppState';
import { OrderService } from 'src/app/State/Order/order.service';
import { PaymentService } from 'src/app/State/Payment/payment.service';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.scss']
})
export class PaymentSuccessComponent {

  orderId:any
  paymentId:any
  order:any;


  constructor(private orderService: OrderService,
    private paymentService:PaymentService,
    private route:ActivatedRoute,
    private store:Store<AppState>) {

    }

    ngOnInit(){
      this.route.queryParams.subscribe((params)=>{
        this.orderId=params["order_id"]
        this.paymentId=params["stripe_payment_id"]
        this.orderService.getOrderById(this.orderId)
      })
      this.paymentService.updatePayment({
        orderId: this.orderId,
        paymentId: this.paymentId 
      })
   
    this.store.pipe(select(store=> store.order)).subscribe((order)=>{
      this.order=order.order;
    })
    }
}
