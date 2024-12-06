import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { PaymentComponent } from './payment-form/payment-form.component';
import { ProductComponent } from './product/product.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
],
    imports: [
        PaymentComponent,
        ProductComponent,
        AppComponent,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        CommonModule
  ],
  providers: [
    provideHttpClient()
    ],
  bootstrap: []
})
export class AppModule { }