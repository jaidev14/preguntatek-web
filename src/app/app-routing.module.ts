import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'preguntatek',
    loadChildren: () => import('./pages/preguntatek/preguntatek.module').then(m => m.PreguntatekModule)
  },
  {
    path: 'admin',
    // canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/preguntatek-admin/preguntatek-admin.module').then(m => m.PreguntatekAdminModule)
  },
  {
    path: '',
    redirectTo: 'preguntatek',
    pathMatch: 'full'
    // loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)
  },
  {
    path: '**',
    redirectTo: 'preguntatek'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

