import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);  // Injecter le service Router ici

  if (typeof window !== 'undefined' && window.sessionStorage) {
    const user = sessionStorage.getItem('user');
    if (user) {
      return true;
    }
  }
  
  // Si non authentifié, rediriger vers une autre page (ex: page de connexion)
  router.navigate(['/auth/connexion']);
  return false;
};
