import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcourModule } from './concour.module';
import { ConcourComponent } from './concour.component';
import path from 'path';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",component:ConcourComponent,
    children:[
      {path:"",redirectTo:"home",pathMatch:"full"},
      {path:"home",component:HomeComponent}
    ]
    
    

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConcourRoutingModule { }
