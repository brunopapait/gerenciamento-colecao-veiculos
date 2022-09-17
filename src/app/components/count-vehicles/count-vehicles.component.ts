import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-vehicles',
  templateUrl: './count-vehicles.component.html',
  styleUrls: ['./count-vehicles.component.css']
})
export class CountVehiclesComponent implements OnInit {
  @Input() qtVehicles: number = 0;
  constructor() { }

  ngOnInit(): void { }
}
