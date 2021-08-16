import { Component, Input,  } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-mat-date',
  templateUrl: './mat-date.component.html',
  styleUrls: ['./mat-date.component.css']
})
export class MatDateComponent implements ControlValueAccessor {


  @Input() label: string; 

  constructor() { }
  writeValue(obj: any): void {
  }
  registerOnChange(fn: any): void {
  }
  registerOnTouched(fn: any): void {
  }


}
