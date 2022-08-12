import { VehiclesFormComponent } from './pages/vehicles-form/vehicles-form.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'vehicles', pathMatch: 'full' },
  { path: 'vehicles', component: VehiclesComponent},
  { path: 'vehicles/new', component: VehiclesFormComponent },
  { path: 'vehicles/edit/:id', component: VehiclesFormComponent }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
