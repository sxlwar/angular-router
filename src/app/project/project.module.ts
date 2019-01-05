import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProjectComponent, ProjectListComponent, ProjectDetailComponent],
  imports: [CommonModule, ProjectRoutingModule, FormsModule],
  exports: [ProjectComponent],
  providers: []
})
export class ProjectModule {}
