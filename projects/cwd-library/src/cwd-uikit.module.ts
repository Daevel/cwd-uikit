import { NgModule } from '@angular/core';
import { CwdCardComponent } from './components/cwd-card/cwd-card.component';
import { CommonModule } from '@angular/common';


@NgModule({
imports: [
    CommonModule,
    CwdCardComponent
  ],
  exports: [CwdCardComponent]
})
export class CwdUikitModule {}
