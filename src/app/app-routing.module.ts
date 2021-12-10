import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'musicapp',
    loadChildren: () => (import('./dashboard/dashboard.module').then(m => m.DashboardModule))
  },
  {
    path: '**',
    redirectTo: 'musicapp/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
