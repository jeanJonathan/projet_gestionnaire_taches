import { Component } from '@angular/core';
/*Composant stockant les taches*/
@Component({
  selector: 'app-tache',
  //templateUrl: './tache.component.html',
  //styleUrls: ['./tache.component.css']
  template: `
    <h2>Presentation des taches</h2>
    <ul>
      <li *ngFor="let tache of taches; index as i">
        {{ tache.nom }}: {{ tache.description }}
        <button (click)="terminerTache(i)">Terminer</button>
      </li>
    </ul>
  `,
})

export class TacheComponent {
  taches = [
    { nom: 'Tâche 1', description: 'La description de la tache 1 (test) ' },
    { nom: 'Tâche 2', description: 'La Description de la tâche 2 (test)' },
    // ...
  ];
  //Definition de la méthode "terminerTache"
  terminerTache(index: number) {
    this.taches.splice(index, 1);
  }

}


