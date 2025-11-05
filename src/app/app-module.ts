import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { PrimerComponent } from '../components/primercomponent/primer.component';
import { HooksAngular } from '../components/hooksangular/hooksangular.component';
import { Deportes } from '../components/deportes/deportes.component';
import { Deportesv2 } from '../components/deportesv2/deportesv2.component';

@NgModule({
  declarations: [
    App,
    PrimerComponent,
    HooksAngular,
    Deportes,
    Deportesv2
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
