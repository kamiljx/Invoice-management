import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {MatTable} from '@angular/material/table';import { invoiceItem } from 'src/app/models/invoiceItem';

@Component({
  selector: 'app-invoice-items',
  templateUrl: './invoice-items.component.html',
  styleUrls: ['./invoice-items.component.css']
})
export class InvoiceItemsComponent  {

  displayedColumns: string[] = ['id','item', 'itemQuantity', 'netPrice', 'grossPrice', 'vatRate'];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable) table: MatTable<invoiceItem>;
  @Output() saveData = new EventEmitter()


  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  saveItems(){
    this.saveData.emit(ELEMENT_DATA)
  }



}



const ELEMENT_DATA: invoiceItem[] = [
  {item: "cos", itemQuantity: 4, netPrice: 10, grossPrice: 18, vatRate: 23},
  {item: "cos", itemQuantity: 4, netPrice: 10, grossPrice: 18, vatRate: 23},
  {item: "cos", itemQuantity: 4, netPrice: 10, grossPrice: 18, vatRate: 23},
];