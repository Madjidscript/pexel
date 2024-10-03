import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path:"",component:AppComponent,
    children:[
        {path:"",redirectTo:"auth",pathMatch:'full'},
        { path: 'accueil', loadChildren: () => import('./acceuil/acceuil.module').then(m => m.AcceuilModule), canActivate: [authGuard] },
        { path: 'video', loadChildren: () => import('./video/video.module').then(m => m.VideoModule), canActivate: [authGuard] },
        { path: 'classement', loadChildren: () => import('./classement/classement.module').then(m => m.ClassementModule), canActivate: [authGuard] },
        { path: 'concour', loadChildren: () => import('./concour/concour.module').then(m => m.ConcourModule), canActivate: [authGuard] },
        {path:"auth",loadChildren:()=> import('./auth/auth.module').then(m=>m.AuthModule)},
        {path:"**",component:NotFoundComponent}
    ]
}
    
];
