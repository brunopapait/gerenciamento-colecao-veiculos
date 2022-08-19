import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencyMaskModule } from 'ng2-currency-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CountVehiclesComponent } from './components/count-vehicles/count-vehicles.component';
import { ButtonRegisterComponent } from './components/button-register/button-register.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { VehiclesFormComponent } from './pages/vehicles-form/vehicles-form.component';
import { VehiclesListContainerComponent } from './components/vehicles-list-container/vehicles-list-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CountVehiclesComponent,
    ButtonRegisterComponent,
    SubHeaderComponent,
    VehiclesComponent,
    VehiclesFormComponent,
    VehiclesListContainerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSelectModule,
    CurrencyMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
