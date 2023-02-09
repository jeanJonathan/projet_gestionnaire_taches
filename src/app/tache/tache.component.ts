import { Component } from '@angular/core';
/*Composant stockant les taches*/
@Component({
  selector: 'app-composant1',
  templateUrl: './composant1.component.html',
  styleUrls: ['./composant1.component.css']

})
export class TacheComponent {
  taches = [
    { nom: 'Tâche 1', description: 'Description de la tâche 1' },
    { nom: 'Tâche 2', description: 'Description de la tâche 2' },
    // ...
  ];
}

