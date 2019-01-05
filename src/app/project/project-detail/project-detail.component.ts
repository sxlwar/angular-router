import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CanDeactivatedComponent, Project } from '../project.service';

@Component({
  selector: 'app-project-detail',
  template: `
    <div *ngIf="!!project">
      <h3>{{ project?.name }}</h3>

      <input type="text" [(ngModel)]="editingName" />

      <div>
        <button (click)="cancel()">Cancel</button>
        <button (click)="confirm()">Confirm</button>
      </div>
    </div>
  `,
  styles: []
})
export class ProjectDetailComponent implements OnInit, CanDeactivatedComponent {
  project: Project;

  editingName: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.project = this.projectService.getProject(id);
    // this.editingName = this.project.name;
    this.route.data.subscribe((data: { project: Project }) => {
      this.project = data.project;
      this.editingName = this.project.name;
    });
  }

  cancel() {
    this.router.navigate(['../']);
  }

  confirm() {
    this.project.name = this.editingName;

    this.cancel();
  }

  canDeactivate() {
    if (this.project.name === this.editingName ) {
      return true;
    }

    const confirmation = window.confirm('项目名称已经发生了了改变，是否保存');

    if (confirmation) {
      this.project.name = this.editingName;
    }

    return confirmation;
  }
}
