import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
    //console.log(this.items);

    this.checkoutForm = this.formBuilder.group({
      nome: '',
      endereco: ''
    });

  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Seu pedido foi enviado', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}