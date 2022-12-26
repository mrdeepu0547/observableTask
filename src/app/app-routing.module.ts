import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartDataComponent } from './cart-data/cart-data.component';
import { PsListComponent } from './ps-list/ps-list.component';

const routes: Routes = [
  {path:'',component:AppComponent},
  {path:'cart',component:CartDataComponent},
  {path:'psList',component:PsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
