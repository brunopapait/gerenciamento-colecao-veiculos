import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles-list-container',
  templateUrl: './vehicles-list-container.component.html',
  styleUrls: ['./vehicles-list-container.component.css']
})
export class VehiclesListContainerComponent implements OnInit, AfterViewInit {
  vehicles: String[];

  @Output() qtVehicles = new EventEmitter<number>();

  constructor(private router: Router) {
    this.vehicles = ['Palio', 'Vectra', 'Azera', 'HB20'];
   }

  ngOnInit(): void {

  }

  async ngAfterViewInit() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    this.qtVehicles.next(this.vehicles.length);
  }

  handleClick(vehicle: String){
    this.router.navigateByUrl(`/vehicles/edit/${vehicle}`);
  }

}
