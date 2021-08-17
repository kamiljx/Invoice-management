import { Injectable } from '@angular/core';
import { invoiceItem } from '../models/invoiceItem';

@Injectable({
  providedIn: 'root'
})
export class AddItemsService {

  itemData: any;
  constructor() { }

  addItem(item: any){
//     console.log("item pushed" + item)
//     console.log(item)
// console.log(typeof(item))
    return this.itemData = item
  }
  getItem(){
    return this.itemData 
  }
}
