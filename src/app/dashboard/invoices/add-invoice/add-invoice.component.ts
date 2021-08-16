import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private fb: FormBuilder) { 


  }

  ngOnInit(): void {
   this.initializeForm()
    console.log(this.supplilier)
  }

  initializeForm(){
    this.invoice = this.fb.group({
      number: [Math.random()],
      suppilier: [this.supplilier],
      customer: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      address: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      taxNo: [, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      invoiceDate: [[Validators.required]],
      invoicePaymentDate: [[Validators.required]]
    })
  }


  addInvoice(){}
}
