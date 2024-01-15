import { Component } from '@angular/core';

@Component({
  selector: 'app-product-review-card',
  templateUrl: './product-review-card.component.html',
  styleUrls: ['./product-review-card.component.scss'],
})
export class ProductReviewCardComponent {
  reviews = [1, 1, 1, 1, 1, 1];
}
