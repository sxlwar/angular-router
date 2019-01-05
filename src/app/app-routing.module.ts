import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './login/auth.service';
import { PreloadStrategyService } from './login/preload.service';

const routes: Routes = [
  { path: '', redirectTo: '/project', pathMatch: 'full' },
  { path: 'complaint', component: ComplaintComponent, outlet: 'contact' },
  { path: 'login', component: LoginComponent },
  { path: 'coder', loadChildren: './coder/coder.module#CoderModule' },
  { path: 'project', loadChildren: './project/project.module#ProjectModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canLoad: [AuthGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, preloadingStrategy: PreloadStrategyService })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
