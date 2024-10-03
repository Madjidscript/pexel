import { CanActivateFn ,Router} from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
 
  const user = sessionStorage.getItem('user');
  
  if (user) {
    return true;
  } else {
    window.location.href = '/auth/connexion';  // Utilise window.location pour rediriger manuellement
    return false;
  }
};
