import { Component } from '@angular/core';

@Component({
  selector: 'app-tablamultiplicar-component',
  standalone: false,
  templateUrl: './tablamultiplicar.component.html',
  styleUrl: './tablamultiplicar.component.css',
})
export class TablamultiplicarComponent {

  public resultados: Array<number>
  public numero: number;

  constructor(){
    this.resultados = []
    this.numero = 0
  }

  generarResultados(){
    let aux = [];
    let resultado = 0;
    for(let i=1; i<=10; i++){
      resultado = this.numero * i;
      aux.push(resultado);
    }
    this.resultados = aux;
  }

}
