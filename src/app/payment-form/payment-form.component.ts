import { Component, OnInit } from '@angular/core';
import { payments } from '@square/web-sdk';

@Component({
  selector: 'PaymentComponent',
  templateUrl: './payment-form.component.html',
  styleUrl: './payment-form.component.css',
})

export class PaymentComponent implements OnInit{
  async ngOnInit() {
    const paymentsInstance = await payments('sandbox-sq0idb-dYndKND591Z6jhejKXTqwQ');

    const card = await paymentsInstance.card();
    await card.attach('#card-container');

    const cardButton = document.getElementById('card-button');
    if (cardButton) {
      cardButton.addEventListener('click', async () => {
        const result = await card.tokenize();
        if (result.status === 'OK') {
          this.processPayment(result.token);
        } else {
          console.error(result.errors);
        }
      });
    } else {
      console.error('El elemento con ID "card-button" no fue encontrado.');
    }
  }

  async processPayment(token: string) {
    const response = await fetch('/process-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nonce: token,
        amount: 1000 // Monto en centavos
      })
    });

    const data = await response.json();
    console.log(data);
  }
}