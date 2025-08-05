import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CwdButtonComponent } from './components/cwd-button/cwd-button.component';
import { CwdCardComponent } from './components/cwd-card/cwd-card.component';
import { CwdCheckboxGroupComponent } from './components/cwd-checkbox-group/cwd-checkbox-group.component';
import { CwdCheckboxComponent } from './components/cwd-checkbox/cwd-checkbox.component'
import { CwdFabComponent } from './components/cwd-fab/cwd-fab.component';
import { CwdIconComponent } from './components/cwd-icon/cwd-icon.component';
import { CwdInputComponent } from './components/cwd-input/cwd-input.component';
import { CwdToastComponent } from './components/cwd-toast/cwd-toast.component';

@NgModule({
imports: [
    CommonModule,
    CwdButtonComponent,
    CwdCardComponent,
    CwdCheckboxGroupComponent,
    CwdCheckboxComponent,
    CwdFabComponent,
    CwdIconComponent,
    CwdInputComponent,
    CwdToastComponent
  ],
  exports: [CwdCardComponent]
})
export class CwdUikitModule {}
