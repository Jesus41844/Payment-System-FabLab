// Importaciones necesarias para el componente
import { Component, OnInit } from '@angular/core';
import { payments } from '@square/web-sdk';

// Decorador @Component que define el componente PaymentComponent
@Component({
  selector: 'PaymentComponent', //Selector del componente
  templateUrl: './payment-form.component.html', //Ruta al HTML del componente
  styleUrl: './payment-form.component.css', //Ruta a los estilos del componente
})

export class PaymentComponent implements OnInit{
  //Metodo que se ejecuta al inicializar el componente
  async ngOnInit() {// Inicializa la instancia de pagos con el ID del sandbox de Square
    const paymentsInstance = await payments('sandbox-sq0idb-dYndKND591Z6jhejKXTqwQ');

    // Crea una instancia de tarjeta y la adjunta al contenedor con ID 'card-container'
    const card = await paymentsInstance.card();
    await card.attach('#card-container');

    // Obtiene el botón de pago por su ID y añade un evento de clic
    const cardButton = document.getElementById('card-button');
    if (cardButton) {
      cardButton.addEventListener('click', async () => {
        // Tokeniza la tarjeta y procesa el pago si la tokenización es exitosa
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

  // Método para procesar el pago con el token generado
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

    // Procesa la respuesta del servidor y la muestra en la consola
    const data = await response.json();
    console.log(data);
  }
}