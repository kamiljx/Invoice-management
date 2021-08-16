import { Component, Input, OnInit, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-mat-text',
  templateUrl: './mat-text.component.html',
  styleUrls: ['./mat-text.component.css']
})
export class MatTextComponent implements ControlValueAccessor {

  @Input() label: string;
  @Input() type: any;
  @Input() placeholder: string
  @Input() hint: string
  @Input() validate: any

  constructor(@Self() public ngControl: NgControl,) { 
    this.ngControl.valueAccessor = this;
  }
  writeValue(obj: any): void {

  }
  registerOnChange(fn: any): void {

  }
  registerOnTouched(fn: any): void {

  }

  ngOnInit(): void {
  }

}
