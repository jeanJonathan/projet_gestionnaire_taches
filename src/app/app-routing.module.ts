// Importation du module de base d'Angular pour la définition de modules
import { NgModule } from '@angular/core';

// Importation du module de route d'Angular et du type de données Routes
import { RouterModule, Routes } from '@angular/router';

// Importation des composants nécessaires à la configuration des routes
import { Composant1Component } from './composant1/composant1.component';
import { Composant2Component } from './composant2/composant2.component';

const routes: Routes = [
  // Définition d'une route avec un chemin et le composant associé
  { path: 'tache', component: Composant1Component },
  // Définition d'une autre route avec un chemin et le composant associé
  { path: 'ajout-tache', component: Composant2Component },
];
/*Notons que les noms des chemin "taches" et "ajout-tache" sont des routes
 virtuelles utilisées dans l'application Angular pour faire la correspondance
 entre une URL et un composant spécifique
 Ainsi si  un utilisateur accède à l'URL "http://jjApkGestionnaireTche.com/taches",
 il verra le composant associé à la route "taches"*/

// Définition du module de routing de l'application avec @NgModule
@NgModule({
  // Importation des routes définies ci-dessus avec RouterModule.forRoot
  imports: [RouterModule.forRoot(routes)],
  // Export du module de routing pour être utilisé dans d'autres modules
  exports: [RouterModule]
})
// Export de la classe AppRoutingModule
export class AppRoutingModule { }
