import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-button-register',
  templateUrl: './button-register.component.html',
  styleUrls: ['./button-register.component.css']
})

export class ButtonRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleClickButtonRegister() {
    alert('Botão de cadastrar clicado !');
  }

}
