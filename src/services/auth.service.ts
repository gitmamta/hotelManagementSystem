
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

export interface User {
  id: string;
  email: string;
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL = `${environment.apiUrl}/api/auth`;

  private currentUserSubject = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient, private router: Router) {
    const token = sessionStorage.getItem('token');
    const storedUser = sessionStorage.getItem('user');

    if (token && storedUser) {
      try {
        const user: User = JSON.parse(storedUser);
        this.currentUserSubject.next(user);
      } catch {
        this.clearAuthData();
      }
    } else {
      this.clearAuthData();
    }
  }

  // Observable user stream
  get currentUser(): Observable<User | null> {
    return this.currentUserSubject.asObservable();
  }

  // Get JWT
  getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  // Auth check
  isAuthenticated(): boolean {
    return !!this.getToken() && !!sessionStorage.getItem('user');
  }

  // Admin check
  isAdmin(): boolean {
    const userStr = sessionStorage.getItem('user');
    if (!userStr) return false;

    try {
      const user: User = JSON.parse(userStr);
      return user.role === 'Admin';
    } catch {
      return false;
    }
  }

  // Register
  register(userData: any): Observable<any> {
    return this.http.post(`${this.API_URL}/register`, userData).pipe(
      tap((res: any) => this.saveAuthData(res))
    );
  }

  // Login
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.API_URL}/login`, { email, password }).pipe(
      tap((res: any) => this.saveAuthData(res))
    );
  }

  // Logout
  logout(): void {
    this.clearAuthData();
    this.router.navigate(['/auth/login']);
  }

  // Save JWT + user
  private saveAuthData(res: any): void {
    this.clearAuthData(); // prevent stale data

    if (res.token) {
      sessionStorage.setItem('token', res.token);
    }

    if (res.user) {
      sessionStorage.setItem('user', JSON.stringify(res.user));
      this.currentUserSubject.next(res.user);
    }
  }

  // Clear session
  clearAuthData(): void {
    sessionStorage.clear();
    this.currentUserSubject.next(null);
  }
}
