import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxElectronModule } from 'ngx-electron';
import { PrimeComponentsModule } from './components/primeComponents';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaincomponentComponent } from './components/maincomponent/maincomponent.component';

@NgModule({
  declarations: [AppComponent, MaincomponentComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxElectronModule,
    PrimeComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
