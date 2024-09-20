import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { OublierComponent } from './oublier/oublier.component';

const routes: Routes = [
  {path:"",redirectTo:"connexion",pathMatch:"full"},
  {path:"connexion",component:ConnexionComponent},
  {path:"inscription",component:InscriptionComponent},
  {path:"oublier",component:OublierComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
