import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassementComponent } from './classement.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",component:ClassementComponent,
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
export class ClassementRoutingModule { }
