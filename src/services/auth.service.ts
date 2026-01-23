import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
// import { environment } from 'src/environments/environment';
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

  // Holds current logged-in user
  private currentUserSubject = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient, private router: Router) {
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    // Only populate if both token & user exist
    if (token && storedUser) {
      try {
        const user: User = JSON.parse(storedUser);
        this.currentUserSubject.next(user);
      } catch {
        localStorage.clear(); // Clear invalid data
      }
    } else {
      localStorage.clear(); // Clear incomplete auth info
    }
  }

  // Observable to allow components to reactively watch user changes
  get currentUser(): Observable<User | null> {
    return this.currentUserSubject.asObservable();
  }

  // Get raw token for HTTP requests
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // True only if token & user exist
  isAuthenticated(): boolean {
    const token = this.getToken();
    const userStr = localStorage.getItem('user');
    return !!token && !!userStr;
  }

  // Check if current user is admin
  isAdmin(): boolean {
    const userStr = localStorage.getItem('user');
    if (!userStr) return false;
    try {
      const user: User = JSON.parse(userStr);
      return user.role === 'Admin';
    } catch {
      return false;
    }
  }

  // Register a new user
  register(userData: any): Observable<any> {
    return this.http.post(`${this.API_URL}/register`, userData).pipe(
      tap((res: any) => {
        this.saveAuthData(res);
      })
    );
  }

  // Login user
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.API_URL}/login`, { email, password }).pipe(
      tap((res: any) => {
        this.saveAuthData(res);
      })
    );
  }

  // Logout user
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
    this.router.navigate(['/auth/login']);
  }

  // Save token & user to localStorage
  private saveAuthData(res: any) {
    if (res.token) {
      localStorage.setItem('token', res.token);
    }
    if (res.user) {
      localStorage.setItem('user', JSON.stringify(res.user));
      this.currentUserSubject.next(res.user);
    }
  }

  // Clear all auth data (for token expiration or invalid data)
  clearAuthData(): void {
    localStorage.clear();
    this.currentUserSubject.next(null);
  }
}
