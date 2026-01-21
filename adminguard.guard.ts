import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

export const adminGuard: CanActivateFn = () => {
  let authService: AuthService = inject(AuthService);
  let route: Router = inject(Router);
  if (authService.isAuthenticated() && authService.getToken() == 'admin') {
    return true;
  } else {
    return route.createUrlTree(['login']);
  }
};
