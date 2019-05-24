import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AW25052019Service} from './services/aw-25052019.service';
import { ShopAWComponent } from './components/shop-aw/shop-aw.component';
import { ShopItemAWComponent } from './components/shop-item-aw/shop-item-aw.component';
import { ShopDetailsAWComponent } from './components/shop-details-aw/shop-details-aw.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopAWComponent,
    ShopItemAWComponent,
    ShopDetailsAWComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AW25052019Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
