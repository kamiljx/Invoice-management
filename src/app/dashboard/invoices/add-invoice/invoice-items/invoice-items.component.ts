import {Component, EventEmitter, Inject, Output, ViewChild} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatTable} from '@angular/material/table';
import { invoiceItem } from 'src/app/models/invoiceItem';
import { AddItemsService } from 'src/app/services/add-items.service';
import { CreateInvoiceItemComponent } from './create-invoice-item/create-invoice-item.component';

@Component({
  selector: 'app-invoice-items',
  templateUrl: './invoice-items.component.html',
  styleUrls: ['./invoice-items.component.css']
})
export class InvoiceItemsComponent  {

  displayedColumns: string[] = ['id','item', 'itemQuantity', 'netPrice', 'netValue', 'grossPrice', 'taxRate', 'taxValue', 'action'];
  dataSource: invoiceItem[] = [] 
  items: any;

  @ViewChild(MatTable) table: MatTable<invoiceItem>;
  @Output() saveData = new EventEmitter()

  constructor(private dialog?: MatDialog, private ai?: AddItemsService){}
  addData() {
    
    const dialogRef = this.dialog?.open(CreateInvoiceItemComponent, {
    })

    dialogRef?.afterClosed().subscribe(() =>{
      if(this.ai?.valid == true){
        this.onSubmitRenderData()
        this.ai?.isValid("UNVALID")
      }
    })
  }
   onSubmitRenderData(){
      this.items = this.ai?.itemData
      this.dataSource.push(this.items);
      this.table.renderRows();
  }

  getTotalCost(){
      return this.dataSource.map(t => t.taxValue).reduce((acc, value) => acc + value, 0);
  }
  saveItems(){
    this.saveData.emit(this.dataSource)
  }
  deleteItem(item:any){
    const selectedItem = this.dataSource.findIndex(c => c.item === item)
    this.dataSource.splice(selectedItem, 1)
    this.table.renderRows()
  }
}