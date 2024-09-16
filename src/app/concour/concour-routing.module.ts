import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcourModule } from './concour.module';
import { ConcourComponent } from './concour.component';

const routes: Routes = [
  {path:"",component:ConcourComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConcourRoutingModule { }
