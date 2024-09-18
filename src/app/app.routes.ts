import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path:"",component:AppComponent,
    children:[
        {path:"",redirectTo:"accueil",pathMatch:'full'},
        { path: 'accueil', loadChildren: () => import('./acceuil/acceuil.module').then(m => m.AcceuilModule) },
        { path: 'video', loadChildren: () => import('./video/video.module').then(m => m.VideoModule) },
        { path: 'classement', loadChildren: () => import('./classement/classement.module').then(m => m.ClassementModule) },
        { path: 'concour', loadChildren: () => import('./concour/concour.module').then(m => m.ConcourModule) },
        {path:"auth",loadChildren:()=> import('./auth/auth.module').then(m=>m.AuthModule)},
        {path:"**",component:NotFoundComponent}
    ]
}
    
];
