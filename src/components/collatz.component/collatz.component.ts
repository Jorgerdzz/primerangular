import { Component } from '@angular/core';

@Component({
  selector: 'app-collatz.component',
  standalone: false,
  templateUrl: './collatz.component.html',
  styleUrl: './collatz.component.css',
})
export class CollatzComponent {

  public numero: number;
  public conjetura: Array<number>

  constructor(){
    this.numero = 0;
    this.conjetura = []
  }

  conjeturaCollatz(): void{
    let resultado = 0;
    let aux = [];
    while(this.numero != 1){
      if(this.numero % 2 == 0){
        resultado = this.numero / 2;
        this.numero = resultado;
      }else{
        resultado = (this.numero * 3) + 1
        this.numero = resultado;
      }
      aux.push(this.numero);
    }
    this.conjetura = aux
  }

}
