import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { ProjectManageComponent } from './project-manage/project-manage.component';
import { CoderManageComponent } from './coder-manage/coder-manage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';

@NgModule({
  declarations: [OverviewComponent, ProjectManageComponent, CoderManageComponent, DashboardComponent, ProjectEditComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
