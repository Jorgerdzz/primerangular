import { Component } from "@angular/core";

@Component({
    selector: 'app-deportesv2',
    templateUrl: './deportesv2.component.html',
    styleUrls: ['./deportesv2.component.css'],
    standalone: false
})

export class Deportesv2 {

    public deportes: Array<string>;
    public numeros: Array<number>;

    constructor(){
        this.deportes = ['Futbol', "Baloncesto", "Tenis", "Padel"];
        this.numeros = [80, 34, 53, 17, 20]
    }

}