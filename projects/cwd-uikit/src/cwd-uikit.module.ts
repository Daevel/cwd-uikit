import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CwdButtonComponent } from './components/cwd-button/public-api';
import { CwdCardComponent } from './components/cwd-card/public-api';
import { CwdCheckboxGroupComponent } from './components/cwd-checkbox-group/public-api';
import { CwdCheckboxComponent } from './components/cwd-checkbox/public-api'
import { CwdFabComponent } from './components/cwd-fab/public-api';
import { CwdIconComponent } from './components/cwd-icon/public-api';
import { CwdInputComponent } from './components/cwd-input/cwd-input.component';
import { CwdToastComponent } from './components/cwd-toast/cwd-toast.component';
import { CwdFlexboxComponent } from './components/cwd-flexbox/public-api';
import { CwdToolbarComponent } from './components/cwd-toolbar/public-api';

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
    CwdToastComponent,
    CwdFlexboxComponent,
    CwdToolbarComponent
  ],
  exports: [CwdCardComponent]
})
export class CwdUikitModule {}
