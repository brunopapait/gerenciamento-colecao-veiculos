import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-item-detail',
  templateUrl: './vehicle-item-detail.component.html',
  styleUrls: ['./vehicle-item-detail.component.css']
})
export class VehicleItemDetailComponent implements OnInit {
  @Input() title: string = '';
  @Input() subtitle: string | number = '';

  constructor() {  }

  ngOnInit(): void {
  }

}
