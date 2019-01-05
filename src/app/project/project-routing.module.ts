import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectComponent } from './project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { CanDeactivatedGuard, ProjectResolve } from './project.service';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
    children: [
      {
        path: '',
        component: ProjectListComponent,
        children: [
          {
            path: ':id',
            component: ProjectDetailComponent,
            canDeactivate: [CanDeactivatedGuard],
            resolve: { project: ProjectResolve }
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule {}
