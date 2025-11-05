import { Component } from "@angular/core";

@Component({
    selector: "app-deportes",
    templateUrl: `./deportes.component.html`,
    styleUrl: './deportes.component.css',
    standalone: false,
})

export class Deportes {
    public deportes: Array<string>;
    public numeros: Array<number>;

    constructor(){
        this.deportes = ['Futbol', "Baloncesto", "Tenis", "Padel"];
        this.numeros = [80, 34, 53, 17, 20]
    }



}