import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatTable} from '@angular/material/table';import { invoiceItem } from 'src/app/models/invoiceItem';
import { AddItemsService } from 'src/app/services/add-items.service';
import { CreateInvoiceItemComponent } from './create-invoice-item/create-invoice-item.component';

@Component({
  selector: 'app-invoice-items',
  templateUrl: './invoice-items.component.html',
  styleUrls: ['./invoice-items.component.css']
})
export class InvoiceItemsComponent  {

  displayedColumns: string[] = ['id','item', 'itemQuantity', 'netPrice', 'netValue', 'grossPrice', 'taxRate', 'taxValue'];
  dataSource: invoiceItem[] = [] 
  items: any;


  halo: invoiceItem[] = []
  @ViewChild(MatTable) table: MatTable<invoiceItem>;
  @Output() saveData = new EventEmitter()

  constructor(private dialog?: MatDialog, private ai?: AddItemsService){}
  addData() {
    
    const dialogRef = this.dialog?.open(CreateInvoiceItemComponent, {
      data: {}
    })

    dialogRef?.afterClosed().subscribe(data =>{
      this.items = this.ai?.itemData
      this.dataSource.push(this.items);
      this.table.renderRows();
      console.log(typeof(this.items))
    })
  }

  saveItems(){
    this.saveData.emit(this.dataSource)
  }

}