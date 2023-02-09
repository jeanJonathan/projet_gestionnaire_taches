import { Component } from '@angular/core';

// Définition du modèle pour les données de la tâche
/*On utilisera cette classe pour declarer un objet tache
qui sera lié aux champs du formulaire et un tableau
taches qui servira à stocker les tâches ajoutées*/
export class Tache {
  nom: string;
  description: string;
}

@Component({
  selector: 'app-ajout-tache',
  //chemin pour les fichiers HTML et CSS correspondant au composant2
  //templateUrl: './composant2.component.html',
  //styleUrls: ['./composant2.component.css']
  template: `
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
        <!----->
        <input type="text" id="description" [(ngModel)]="tache.description" name="description">
      </div>
      <button type="submit">Ajouter tâche</button>
    </form>
  `,
})
export class AjoutTacheComponent {
  tache: Tache = {
    nom: '',
    description: '',
  };

  // Tableau pour stocker les tâches ajoutées
  taches: Tache[] = [];

  // Méthode pour ajouter une tache au tableau de taches
  /*Cette methode est appelée lorsque le formulaire est soumis et elle ajoute
  la tâche en cours de saisie au tableau taches.*/
  ajouterTache() {
    //Ajoute la valeur de la tache au tableau
    this.taches.push(this.tache);
    //réinitialisation de la tache pour definire un objet vide pour la prochaine tache
    this.tache = {
      nom: '',
      description: '',
    };
  }
}



