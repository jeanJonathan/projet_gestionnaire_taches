import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*variable booléenne définie ,
   qui peut être définie sur "true" pour afficher mon appli
    et sur "false" pour la masquer */
  showApp: boolean = true;
  title = 'projet_gestionnaire_taches';
  message= 'Bienvenue dans ton application Angular jj !'

  taches = [
    { nom: 'Tâche 1', description: 'La Description de la tâche 1 (Composant racine)' },
    { nom: 'Tâche 2', description: 'La Description de la tâche 2 (Composant racine)' },
    { nom: 'Tâche 3', description: 'La Description de la tâche 3 (Composant racine)' },
  ];
}
