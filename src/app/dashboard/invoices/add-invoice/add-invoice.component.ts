import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { suppilier } from 'src/app/models/suppiler';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {
  invoice: FormGroup;
  supplilier = suppilier
  validationErrors: string[] =[]
  invoiceItems: [object] 
  constructor(private fb: FormBuilder) { 


  }

  ngOnInit(): void {
   this.initializeForm()
   this.onChanges()
    console.log(this.supplilier)
  }

  addItem(obj: [object]) {
   this.invoiceItems = obj
   this.invoice.addControl('invoiceItems', new FormControl(this.invoiceItems))
  }
  initializeForm(){
    this.invoice = this.fb.group({
      number: [Math.random()],
      suppilier: [this.supplilier],
      customer: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      address: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      taxNo: [, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      invoiceDate: [[Validators.required]],
      invoicePaymentDate: [[Validators.required]],
    })
  }
  onChanges(){
    this.invoice.get('invoiceItems')?.valueChanges.subscribe(val => {
      this.invoiceItems 
    })
  }
  addInvoice(){}
}
