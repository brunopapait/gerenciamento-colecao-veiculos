import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent implements OnInit {
  @Input() qtVehicles: number = 0;

  constructor() { }

  ngOnInit(): void { }

}
