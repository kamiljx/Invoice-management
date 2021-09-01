import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { invoiceItem } from 'src/app/models/invoiceItem';
import { AddItemsService } from 'src/app/services/add-items.service';

@Component({
  selector: 'app-create-invoice-item',
  templateUrl: './create-invoice-item.component.html',
  styleUrls: ['./create-invoice-item.component.css']
})
export class CreateInvoiceItemComponent implements OnInit {

  item: FormGroup
  itemQuantity: number =0;
  netValue: number = 0;
  taxValue: number = 0;
  grossPrice: number = 0;
  taxRate: any [] = [
    {value: 5},
    {value: 8},
    {value: 23},
  ]
  
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<CreateInvoiceItemComponent>, 
    private ai: AddItemsService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.initializeForm()
     this.onChange()
  }

  initializeForm(){
    this.item = this.fb.group({
      item: ['', [Validators.required]],
      itemQuantity: ['', [Validators.required]],
      netPrice: ['', [Validators.required]],
      netValue: [''],
      grossPrice: [''],
      taxRate: ['', [Validators.required]],
      taxValue: [''],
    })
  }


  onChange(){
     this.item.controls['itemQuantity'].valueChanges.subscribe(val =>{
       this.itemQuantity = val
     })
     this.item.controls['netPrice'].valueChanges.subscribe(val =>{
       let netV = this.netValue = this.itemQuantity * val
       this.item.controls['netValue'].setValue(netV)
      })
      this.item.controls['grossPrice'].valueChanges.subscribe(val =>{
        this.item.controls['taxValue'].setValue(this.taxValue)
    })

   }
  calculateGrossPrice(){
    let netValue:number = parseInt(this.item.controls['netValue'].value)
    let taxRate:number = parseInt(this.item.controls['taxRate'].value)
    this.taxValue = netValue * (taxRate / 100)
    this.grossPrice = netValue + this.taxValue

    return this.item.controls['grossPrice'].setValue(this.grossPrice)
  }
  getStatus(){
    let status:string = this.item.status
    this.ai.isValid(status)
  }
  addItem(){
    this.calculateGrossPrice()
    this.getStatus()
    this.ai.addItem(this.item.value)
    console.log(this.item.value)

  }
}
