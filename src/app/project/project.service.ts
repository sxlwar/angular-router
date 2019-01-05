import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, Resolve } from '@angular/router';

import { Observable, from } from 'rxjs';
import { delay, find } from 'rxjs/operators';

export interface Project {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private list: Project[] = [
    { id: 1001, name: 'java' },
    { id: 1002, name: 'c#' },
    { id: 1003, name: '.net' },
    { id: 1004, name: 'php' },
    { id: 1005, name: 'nodejs' }
  ];

  getProjectList(): Project[] {
    return this.list;
  }

  getProject(id: number): Observable<Project> {
    // return this.list.find(item => item.id === id);
    return from(this.list).pipe(
      delay(2000),
      find(item => item.id === id )
    );
  }
}

export interface CanDeactivatedComponent {
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CanDeactivatedGuard implements CanDeactivate<CanDeactivatedComponent> {
  canDeactivate(
    component: CanDeactivatedComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProjectResolve implements Resolve<Project> {
    constructor(private projectService: ProjectService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Project> | Promise<Project> | Project {
      const id = +route.paramMap.get('id');

      return this.projectService.getProject(id);
    }
}
