import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/guards/auth.guard';

const routes: Routes = [
  {
    path: 'preguntatek',
    loadChildren: () => import('./pages/preguntatek/preguntatek.module').then(m => m.PreguntatekModule)
  },
  {
    path: 'preguntatek/admin',
    canActivate: [AuthGuard],
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
    pathMatch: 'full',
    redirectTo: 'preguntatek'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

