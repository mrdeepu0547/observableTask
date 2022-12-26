import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AvailItemsComponent } from './avail-items/avail-items.component';
import { CartDataComponent } from './cart-data/cart-data.component';
import { PsListComponent } from './ps-list/ps-list.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
     FormsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    AvailItemsComponent,
    CartDataComponent,
    PsListComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    CurrencyPipe
  ]
})
export class AppModule { }
