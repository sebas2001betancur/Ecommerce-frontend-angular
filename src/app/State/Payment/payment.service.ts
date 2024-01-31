import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, map, of } from 'rxjs';
import { BASE_API_URL } from 'src/app/config/api';

import { AppState } from 'src/app/Models/AppState';
import { createPaymentFailure, createPaymentSuccess, updatePaymentFailure, updatePaymentSuccess } from './payment.action';

@Injectable({
  providedIn: 'root',
})

export class PaymentService {
  API_BASE_URL = BASE_API_URL;

  constructor(
    private store: Store<AppState>,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  createPayment(orderId:any) {
    const url = `${this.API_BASE_URL}/api/payments/${orderId}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    })

    return this.http
      .post(url, {}, { headers })
      .pipe(map((data: any) => {
          console.log('created payment link ', data)
          if(data.payment_link_url){
            window.location.href = data.payment_link_url
          }
          return createPaymentSuccess({ payload:data });
        }),
        catchError((error: any) => {
          return of(
            createPaymentFailure(
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message))
        })
      )
      .subscribe((action) => this.store.dispatch(action));
  }

  updatePayment(reqData:any) {
    const url = `${this.API_BASE_URL}/api/payments?order_id=${reqData.orderId}&payment_id=${reqData.paymentId}`;

    console.log("update payment data ", reqData);
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    });

    return this.http
        .get(url, { headers })
        .pipe(
            map((data: any) => {
                console.log('update payment ', data);
                return updatePaymentSuccess({ payload: data });
            }),
            catchError((error: any) => {
                return of(
                    updatePaymentFailure(
                        error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message
                    )
                );
            })
        )
        .subscribe((action) => this.store.dispatch(action));
}

  
}
