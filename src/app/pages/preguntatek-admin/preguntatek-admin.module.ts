import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { PreguntatekAdminRoutingModule } from './preguntatek-admin-routing.module';
import { PreguntatekAdmin } from './preguntatek-admin.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PreguntatekAdminRoutingModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [PreguntatekAdmin]
})
export class PreguntatekAdminModule {}
