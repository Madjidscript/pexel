import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil.component';
import { HomeComponent } from './home/home.component';
import { PopulaireComponent } from './populaire/populaire.component';
import { BlogComponent } from './blog/blog.component';
import { LicenceComponent } from './licence/licence.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:"",component:AcceuilComponent,
    children:[
      {path:"",redirectTo:"home", pathMatch:"full"},
      {path:"home",component:HomeComponent},
      {path:"populaire",component:PopulaireComponent},
      {path:"blog",component:BlogComponent},
      {path:"licence",component:LicenceComponent},
      {path:"user",component:UtilisateurComponent},
      {path:"update/:id",component:UpdateComponent}

    ]
   

  }
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcceuilRoutingModule { }
