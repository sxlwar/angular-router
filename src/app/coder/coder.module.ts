import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CoderComponent } from './coder.component';
import { CoderDetailComponent } from './coder.detail.component';
import { CoderRoutingModule } from './coder-routing.module';

@NgModule({
  declarations: [CoderComponent, CoderDetailComponent],
  imports: [CommonModule, FormsModule, CoderRoutingModule],
  exports: [CoderComponent],
  providers: []
})
export class CoderModule {}
