import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { suppilier } from 'src/app/models/suppiler';
import { FirebaseService } from 'src/app/services/firebase.service';

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

  constructor(private fb: FormBuilder, private firebase: FirebaseService) { 


  }

  ngOnInit(): void {
   this.initializeForm()
   this.onChanges()
    console.log(this.supplilier)
  }

  addItem(obj: [object]) {
   this.invoiceItems = obj
   this.invoice.controls['invoiceItems'].setValue(this.invoiceItems)
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
      invoiceItems: [,[Validators.required, Validators.minLength(1)]]
    })
  }
  onChanges(){
    this.invoice.get('invoiceItems')?.valueChanges.subscribe(val => {
      this.invoiceItems 
    })
  }
  addInvoice(){
    console.log(this.invoice.value)
    this.firebase.CreateIncoice(this.invoice.value)
  }
}
