import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

import { PreguntatekRoutingModule } from './preguntatek-routing.module';
import { Preguntatek } from './preguntatek.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PreguntatekRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatDialogModule
  ],
  declarations: [Preguntatek]
})
export class PreguntatekModule {}
