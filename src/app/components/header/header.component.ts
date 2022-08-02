import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  firstNameHeader: string;
  secondNameHeader: string;
  constructor() {
    this.firstNameHeader = 'Meus';
    this.secondNameHeader = 'Veiculos';
   }

  ngOnInit(): void {
  }

}
