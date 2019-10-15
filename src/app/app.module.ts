import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerHomePageComponent } from './components/HomePage/banner-home-page/banner-home-page.component';
import { WhatWeOfferComponent } from './components/HomePage/what-we-offer/what-we-offer.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerHomePageComponent,
    WhatWeOfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
