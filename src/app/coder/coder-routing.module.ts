import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoderComponent } from './coder.component';
import { CoderDetailComponent } from './coder.detail.component';

const routes: Routes = [
  { path: '', component: CoderComponent },
  { path: ':id', component: CoderDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoderRoutingModule {}
