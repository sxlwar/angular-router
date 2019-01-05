import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route, Router, NavigationStart } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PreloadStrategyService implements PreloadingStrategy {
  constructor(private router: Router) {}

  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return this.router.events.pipe(
      filter(event => event instanceof NavigationStart),
      switchMap((event: NavigationStart) => {
        if (event.url.includes('complaint')) {
          return fn();
        } else {
          return of(null);
        }
      })
    );
  }
}
