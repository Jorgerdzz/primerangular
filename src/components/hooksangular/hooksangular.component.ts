import { Component, OnInit, DoCheck } from "@angular/core";

@Component({
    selector: "hooks-angular",
    standalone: false,
    templateUrl: "./hooksangular.component.html"
})

export class HooksAngular implements OnInit{
    constructor(){
        console.log("Constructor: Pirmer metodo de inicio de Component");
    }

    ngOnInit(): void {
        console.log("Soy OnInit, después del constructor!!!")
    }

    ngDoCheck(): void{
        console.log("NgDoCheck cambiando algo en el Render!!!")
    }

}