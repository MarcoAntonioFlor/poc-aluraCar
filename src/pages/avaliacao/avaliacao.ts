import { Component } from '@angular/core';
@Component({
  selector: 'page-avaliacao',
  templateUrl: 'avaliacao.html'
})
export class AvaliacaoPage {

  text: string;

  constructor() {
    console.log('Hello AvaliacaoComponent Component');
    this.text = 'Hello World';
  }
  bom(){
    console.log('bom');
  }

}
