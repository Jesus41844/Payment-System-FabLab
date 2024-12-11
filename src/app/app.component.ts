// Importaciones necesarias para el componente principal
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

// Decorador @Component que define el componente principal
@Component({
  selector: 'app-root', //Ruta del selector
  imports: [RouterOutlet, //Importa RouterOutlet para la navegación
    ProductComponent, //Importa el componente Producto
    MatToolbarModule, //Importa el módulo de barra de herramientas de Angular Material
    MatButtonModule, //Importa el módulo de botones de Angular Material
  ],
  templateUrl: './app.component.html', //Ruta al archivo HTML
  styleUrl: './app.component.css' //Ruta a los estilos CSS
})

export class AppComponent {
  title = 'Payment-System-FabLab'; //Titulo del componente
  //Objeto de los productos con nombre y precio
  product = { name: 'Producto prueba 1', price: 1000}
  // Variable para controlar la visibilidad del popup
  showPopup = false;

  // Método para alternar la visibilidad del popup
  togglePopup() {
    this.showPopup = !this.showPopup;
  }
}