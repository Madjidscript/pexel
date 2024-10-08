import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoComponent } from './video.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",component:VideoComponent,
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
export class VideoRoutingModule { }
