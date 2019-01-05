import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivateChild,
  CanLoad,
  Route,
  UrlSegment
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authState = false;

  private permission = 0;

  constructor(private router: Router) {}

  login() {
    this.authState = true;
    this.router.navigate(['/dashboard']);
    this.permission = Math.random() * 10;
  }

  logout() {
    this.authState = false;
    this.router.navigate(['/project']);
    this.permission = 0;
  }

  getAuthState() {
    return this.authState;
  }

  getPermission() {
    return this.permission;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.getAuthState()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.getPermission() > 5;
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.getAuthState()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
