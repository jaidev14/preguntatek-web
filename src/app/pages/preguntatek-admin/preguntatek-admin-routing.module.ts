import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreguntatekAdmin } from './preguntatek-admin.component';

const routes: Routes = [
  {
    path: '',
    component: PreguntatekAdmin
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreguntatekAdminRoutingModule {}
