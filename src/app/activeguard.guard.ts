import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service'

export const activeGuard: CanActivateFn = () => {
  let authService: AuthService = inject(AuthService);
  let route: Router = inject(Router);
  if (authService.isAuthenticated()) {
    return true;
  } else {
    route.navigate(['login'])
    return false;
  }
};
