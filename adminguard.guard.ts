import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

export const adminGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // 1️⃣ Check if user is authenticated
  if (!authService.isAuthenticated()) {
    // Not logged in → redirect to login page with returnUrl for dashboard
    return router.createUrlTree(['/auth/login'], { queryParams: { returnUrl: '/dashboard' } });
  }

  // 2️⃣ Check if user is admin
  if (!authService.isAdmin()) {
    // Logged in but not admin → redirect to booking
    return router.createUrlTree(['/booking']);
  }

  // 3️⃣ Logged in and admin → allow access
  return true;
};
