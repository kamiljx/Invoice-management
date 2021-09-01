import { Injectable } from '@angular/core';
import { AngularFireAction, AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { InvoiceItemsComponent } from '../dashboard/invoices/add-invoice/invoice-items/invoice-items.component';
import { invoice } from '../models/invoice';
import { invoiceItem } from '../models/invoiceItem';
import { first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  table:any;
  private dbPath = "/invoices";
  invoicesRef: AngularFireList<invoice> 
  items: Observable<invoice[]>;
  constructor(private db: AngularFireDatabase) {
    this.invoicesRef = db.list(this.dbPath)
    
    this.items = this.invoicesRef.snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.val() as invoice
          data.key = a.payload.key 
          return data;
        })
      })
    )
  }

   getItems(){
    return this.items
   } 

   CreateIncoice(invoice:invoice){
     console.log(invoice)
     this.invoicesRef.push(invoice)
   }

   delete(key: string){
    return this.invoicesRef.remove(key)
   }

   
   



}
