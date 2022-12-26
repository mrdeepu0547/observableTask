import { CurrencyPipe } from '@angular/common';
import { Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-data',
  templateUrl: './cart-data.component.html',
  styleUrls: ['./cart-data.component.css']
})
export class CartDataComponent implements OnInit {

  @Input() items=[];
  @ViewChildren("subTotalWrap") subTotalItems: QueryList<ElementRef>;
  constructor(public cartService: CartService,
    private currencyPipe: CurrencyPipe) { }

  ngOnInit(): void {
  }
  changeSubtotal(item, index) {
    const qty = item.qtyTotal;
    const amt = item.variationCost;
    const subTotal = amt * qty;
    const subTotal_converted = this.currencyPipe.transform(subTotal, "USD");

    this.subTotalItems.toArray()[
      index
    ].nativeElement.innerHTML = subTotal_converted;
    this.cartService.saveCart();
  }
  removeFromCart(item) {
    this.cartService.removeItem(item);
    this.items = this.cartService.getItems();
  }
}
