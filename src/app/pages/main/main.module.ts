import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';
import { Main } from './main.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MainRoutingModule,
  ],
  declarations: [Main]
})
export class MainModule {}