import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Composant1Component } from './composant1/composant1.component';
import { Composant2Component } from './composant2/composant2.component';
import { TacheListeComponent } from './tache-liste/tache-liste.component';
import { TacheListeexitexComponent } from './tache-listeexitex/tache-listeexitex.component';
import { TacheComponent } from './tache/tache.component';
import { AjouterTacheComponent } from './ajouter-tache/ajouter-tache.component';

@NgModule({
  declarations: [
    AppComponent,
    Composant1Component,
    Composant2Component,
    TacheListeComponent,
    TacheListeexitexComponent,
    TacheComponent,
    AjouterTacheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
