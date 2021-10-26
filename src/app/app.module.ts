import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NationsComponent } from './nations/nations.component';
import { MoneyPipe } from './money.pipe';
import { CountriesComponent } from './nations/countries/countries.component';

@NgModule({
  declarations: [
    AppComponent,
    NationsComponent,
    MoneyPipe,
    CountriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
