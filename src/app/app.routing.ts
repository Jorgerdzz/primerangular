import { Deportes } from "../components/deportes/deportes.component";
import { Deportesv2 } from "../components/deportesv2/deportesv2.component";
import { FormsBinding } from "../components/formsbinding/formsbinding.component";
import { HooksAngular } from "../components/hooksangular/hooksangular.component";
import { PrimerComponent } from "../components/primercomponent/primer.component";
import { SumarNumeros } from "../components/sumarnumeros/sumarnumeros.component";
import { TablamultiplicarComponent } from "../components/tablamultiplicar.component/tablamultiplicar.component";

import { Routes, RouterModule } from "@angular/router";

import { ModuleWithProviders } from "@angular/core";

const appRoutes: Routes = [
    {path: "", component:PrimerComponent},
    {path: "hooks", component:HooksAngular},
    {path: "deportes", component:Deportes},
    {path: "deportesv2", component:Deportesv2},
    {path: "formbinding", component:FormsBinding},
    {path: "sumarnumeros", component:SumarNumeros},
    {path: "tablamultiplicar", component:TablamultiplicarComponent}
]

export const appRoutingProvider: any[] = []

export const Routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);