import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'cwd-input',
  templateUrl: './cwd-input.component.html',
  styleUrls: ['./cwd-input.component.scss'],
  standalone: true,
  imports: [NgIf, FormsModule]
})
export class CwdInputComponent {
  @Input() label: string = '';
  @Input() ariaLabel: string = '';
  @Input() hint: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() model: any;
  @Input() disabled: boolean = false;
  @Output() modelChange = new EventEmitter<any>();

  isFocused = false;
}