import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from "../payment-form/payment-form.component";

@Component({
  selector: 'AppProduct',
  imports: [PaymentComponent, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})


export class ProductComponent {
  showPopup = false;

  togglePopup() {
    if (this.showPopup != true) {
      this.showPopup = true;
    } else {
      this.showPopup = false;
    }
  }

  product = {
    name: 'PRODUCTO DE EJEMPLO',
    price: 10000
  };

  showPaymentForm = false;

  togglePaymentForm() {
    this.showPaymentForm = !this.showPaymentForm;
  }
}