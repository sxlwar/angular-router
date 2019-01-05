import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { ProjectManageComponent } from './project-manage/project-manage.component';
import { CoderManageComponent } from './coder-manage/coder-manage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../login/auth.service';
import { ProjectEditComponent } from './project-edit/project-edit.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: OverviewComponent },
      {
        path: 'project',
        component: ProjectManageComponent,
        canActivateChild: [AuthGuard],
        children: [{ path: '', component: ProjectEditComponent }]
      },
      { path: 'coder', component: CoderManageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
