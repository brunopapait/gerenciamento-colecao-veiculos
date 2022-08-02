import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CountVehiclesComponent } from './components/count-vehicles/count-vehicles.component';
import { ButtonRegisterComponent } from './components/button-register/button-register.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CountVehiclesComponent,
    ButtonRegisterComponent,
    SubHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
