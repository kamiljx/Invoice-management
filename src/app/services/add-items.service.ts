import { Injectable } from '@angular/core';
import { invoiceItem } from '../models/invoiceItem';

@Injectable({
  providedIn: 'root'
})
export class AddItemsService {
  valid: boolean
  itemData: any;
  constructor() { }

  addItem(item: any){
    return this.itemData = item
  }
  getItem(){
    return this.itemData 
  }
  isValid(status: string){
    (status === "VALID") ? this.valid = true : this.valid = false
  }
}