import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  imports: [
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatGridListModule,
  ],
  exports: [
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatGridListModule,
  ],
})
export class MaterialModule {}
