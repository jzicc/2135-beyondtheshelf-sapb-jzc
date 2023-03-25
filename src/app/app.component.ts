import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public carts = [];

  constructor(
    private _cartService: CartService
  ) {}

  ngOnInit() {
    this.carts = this._cartService.getCarts();
  }
}
