import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Project, ProjectService } from '../project.service';
import { Router, ResolveStart, ResolveEnd } from '@angular/router';
import { filter, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-project-list',
  template: `
    <ul>
      <li *ngFor="let item of projects" [routerLink]="item.id">{{ item.name }}</li>
    </ul>
    <p *ngIf="loading | async">数据加载中....</p>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class ProjectListComponent implements OnInit {
  projects: Project[];

  loading: Observable<boolean>;

  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit() {
    this.projects = this.projectService.getProjectList();

    this.loading = this.router.events.pipe(
      filter(event => event instanceof ResolveStart || event instanceof ResolveEnd),
      map(event => event instanceof ResolveStart),
      startWith(false)
    );
  }
}
