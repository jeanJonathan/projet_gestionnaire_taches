import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TacheListeComponent } from './tache-liste/tache-liste.component';
import { TacheComponent } from './tache/tache.component';
import { AjouterTacheComponent } from './ajouter-tache/ajouter-tache.component';
//On importe la bibliotheque Angular Forms pour pouvoir utiliser la directive ngSubmit dans le Composant ajouterTache
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TacheListeComponent,
    TacheComponent,
    AjouterTacheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
