import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { PrimerComponent } from '../components/primercomponent/primer.component';
import { HooksAngular } from '../components/hooksangular/hooksangular.component';
import { Deportes } from '../components/deportes/deportes.component';
import { Deportesv2 } from '../components/deportesv2/deportesv2.component';
import { FormsModule } from '@angular/forms';
import { FormsBinding } from '../components/formsbinding/formsbinding.component';
import { SumarNumeros } from '../components/sumarnumeros/sumarnumeros.component';
import { Prueba } from './components/prueba/prueba';
import { Prueba2Component } from './components/prueba2.component/prueba2.component';
import { TestComponent } from '../components/test.component/test.component';

@NgModule({
  declarations: [
    App,
    PrimerComponent,
    HooksAngular,
    Deportes,
    Deportesv2,
    FormsBinding,
    SumarNumeros,
    Prueba,
    Prueba2Component,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
