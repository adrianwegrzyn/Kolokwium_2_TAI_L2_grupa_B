import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShopAWComponent} from './components/shop-aw/shop-aw.component';
import {ShopDetailsAWComponent} from './components/shop-details-aw/shop-details-aw.component';

const routes: Routes = [
  {
    path: '',
    component: ShopAWComponent
  },
  {
    path: 'shop/detail/:id',
    component: ShopDetailsAWComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
