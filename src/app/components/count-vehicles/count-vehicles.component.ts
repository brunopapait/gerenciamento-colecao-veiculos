import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-vehicles',
  templateUrl: './count-vehicles.component.html',
  styleUrls: ['./count-vehicles.component.css']
})
export class CountVehiclesComponent implements OnInit {
  quantidadeVeiculosCadastrados: number;
  constructor() {
    this.quantidadeVeiculosCadastrados = 0;
  }

  ngOnInit(): void {
  }

}
