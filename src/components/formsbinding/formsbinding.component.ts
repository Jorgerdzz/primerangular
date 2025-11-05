import { Component } from "@angular/core";

@Component({
    standalone: false,
    selector: 'app-forms-binding',
    templateUrl: './formsbinding.component.html'
})

export class FormsBinding{

    public user: any;
    public mensaje: string;

    constructor(){
        this.user = {
            nombre: "",
            apellidos: "",
            edad: 0
        }
        this.mensaje = ""
    }

    recibirDatos(): void{
        this.mensaje = "Datos recibidos"
    }

}