//import { Component } from '@angular/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tache-liste',
  //templateUrl: './tache-liste.component.html',
  //styleUrls: ['./tache-liste.component.css']
  template: `
    <h2>Liste des tâches</h2>
    <ul>
      <li *ngFor="let tache of taches">
        {{ tache.nom }}: {{ tache.description }}
      </li>
    </ul>
    <!---implementation car on a passez la méthode "terminerTache" à partir du
    composant Tache en utilisant la directive [terminerTache] donc on veut de meme que l'utilise utilise
    ici la meme fonctionnalite--->
    <ul>
      <li *ngFor="let tache of taches; index as i">
        {{ tache.nom }}: {{ tache.description }}
        <button (click)="terminerTache(i)">Terminer</button>
      </li>
    </ul>
  `,
})
export class TacheListeComponent {
  //Pour signifier que cette propriete est passee depuis un autre composant en utilisant la directive [taches]="taches"
  @Input() taches;
  @Input() terminerTache: Function;

}



