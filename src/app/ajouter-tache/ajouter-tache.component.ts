import { Component } from '@angular/core';

// Définition du modèle pour les données de la tâche
/*On utilisera cette classe pour declarer un objet tache
qui sera lié aux champs du formulaire et un tableau
taches qui servira à stocker les tâches ajoutées*/
export class Tache {
  /*Rappel en typeScript les proprites d'une classe doivent etre definie ou avoir une valeur initial*/
  nom: string;
  description: string;
  constructor(nom:string,description:string) {
    this.nom=nom;
    this.description=description;
  }
}
@Component({
  selector: 'app-ajouter-tache',
  //chemin pour les fichiers HTML et CSS correspondant au composant2
  //templateUrl: './ajouter-tache.component.html',
  styleUrls: ['./ajouter-tache.component.css'],
  template: `
    <h2>Ajout des taches</h2>
    <!--Lorsqu'on submit, la tache est automatiquement ajoutee--->
    <form (ngSubmit)="ajouterTache()">
      <div>
        <label for="nom">Nom :</label>
        <!--On utilise la lisaision  bidirectionnelle [(ngModel)] pour lier les
         champs du formulaire à l'objet tache--->
        <!---Lorsque l'utilisateur modifie les champs, les valeurs seront
        automatiquement mises à jour dans l'objet tache et inversement.--->
        <input type="text" id="nom" [(ngModel)]="tache.nom" name="nom">
      </div>
      <div>
        <label for="description">Description :</label>
        <!---pareil-->
        <input type="text" id="description" [(ngModel)]="tache.description" name="description">
      </div>
      <button type="submit">Ajouter tâche</button>
    </form>
    <!--- pour afficher la liste des tâches ajoutées uniquement
     si le tableau taches contient au moins un élément--->
    <div *ngIf="taches.length">
      <h3>Tâches ajoutées:</h3>
      <ul>
        <!----pour itérer sur le tableau taches et afficher les noms et
         les descriptions de chaque tâche.---->
         <!---Implementation a l'interieur de la balise <li> la possibilite a l'utilisateur de supprimer
         un element ajouter en utilisant l'index i-->
        <li *ngFor="let t of taches;let i = index">
          {{t.nom}} - {{t.description}}
          <button (click)="supprimerTache(i)">Supprimer</button>
        </li>
      </ul>
    </div>
  `,
})
export class AjouterTacheComponent {
  tache: Tache = {
    nom: '',
    description: '',
  };

  // Tableau taches pour stocker les tâches ajoutées
  taches: Tache[] = [];

  // Méthode pour ajouter une tache au tableau de taches
  /*Cette methode est appelée lorsque le formulaire est soumis et elle ajoute
  la tâce en cours de saisie au tableau taches.*/
  ajouterTache() {
    //Ajoute la valeur de la tache au tableau
    this.taches.push(this.tache);
    //réinitialisation de la tache pour definire un objet vide pour la prochaine tache
    this.tache = {
      nom: '',
      description: '',
    };
  }
  /*Ajout d'Une methode supprimer tache pour permettre a l'utilisateur
  * de supprimer la tache qu'il a rajouter*/
  supprimerTache(index: number) {
    /*splice pour supprimer un element dans le tableau*/
    this.taches.splice(index, 1);
  }

}
