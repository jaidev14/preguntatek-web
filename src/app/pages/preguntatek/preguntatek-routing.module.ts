import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Preguntatek } from './preguntatek.component';

const routes: Routes = [
  {
    path: '',
    component: Preguntatek
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreguntatekRoutingModule {}
