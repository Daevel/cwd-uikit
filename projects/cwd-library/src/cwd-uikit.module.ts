import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CwdCardComponent } from './components/cwd-card/cwd-card.component';
import { CwdButtonComponent } from './components/cwd-button/cwd-button.component';
import { CwdCheckboxComponent } from './components/cwd-checkbox/cwd-checkbox.component';
import { CwdCheckboxGroupComponent } from './components/cwd-checkbox-group/cwd-checkbox-group.component';
import { CwdFabComponent } from './components/cwd-fab/cwd-fab.component';
import { CwdFlexboxComponent } from './components/cwd-flexbox/cwd-flexbox.component';
import { CwdIconComponent } from './components/cwd-icon/cwd-icon.component';
import { CwdInputComponent } from './components/cwd-input/cwd-input.component';
import { CwdToastComponent } from './components/cwd-toast/cwd-toast.component';

//* SERVICES
import { CwdToastService } from './services/cwd-toast.service';


@NgModule({
imports: [
    CommonModule,
    CwdButtonComponent,
    CwdCardComponent,
    CwdCheckboxComponent,
    CwdCheckboxGroupComponent,
    CwdFabComponent,
    CwdFlexboxComponent,
    CwdIconComponent,
    CwdInputComponent,
    CwdToastComponent
  ],
  exports: [
    CwdButtonComponent,
    CwdCardComponent,
    CwdCheckboxComponent,
    CwdCheckboxGroupComponent,
    CwdFabComponent,
    CwdFlexboxComponent,
    CwdIconComponent,
    CwdInputComponent,
    CwdToastComponent
  ],
  providers: [
    CwdToastService
  ]
  
})
export class CwdUikitModule {}
