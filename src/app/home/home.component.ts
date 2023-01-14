import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {

// Quando for chamado exporta um valor boolean para o componente pai(app.component)
  @Output() newEvent = new EventEmitter<boolean>();
  // função que chama o evento
  exportBtnAll(value: boolean){
    this.newEvent.emit(value);
  }

}
