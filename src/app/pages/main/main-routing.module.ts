import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Main } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: Main
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
