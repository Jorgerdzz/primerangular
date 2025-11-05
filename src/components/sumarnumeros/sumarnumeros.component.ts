import { Component } from "@angular/core";
import { ViewChild, ElementRef } from "@angular/core";

@Component({
    selector: 'app-sumar-numeros',
    templateUrl: 'sumarnumeros.component.html',
    standalone: false
})

export class SumarNumeros{

    @ViewChild("cajanum1") cajaNum1Ref: ElementRef;
    @ViewChild("cajanum2") cajaNum2Ref: ElementRef

    public suma: number;

    constructor(){
        this.suma = 0
        this.cajaNum1Ref = new ElementRef(0);
        this.cajaNum2Ref = new ElementRef(0);
    }

    sumarNumeros(): void{
        this.suma = parseInt(this.cajaNum1Ref.nativeElement.value) + parseInt(this.cajaNum2Ref.nativeElement.value)
    }

}