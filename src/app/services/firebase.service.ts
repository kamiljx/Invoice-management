import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { invoiceItem } from '../models/invoiceItem';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private dbPath = "/invoices";
  invoicesRef: AngularFireList<any> 
  constructor(private db: AngularFireDatabase) {
    this.invoicesRef = db.list(this.dbPath)
   }


   CreateIncoice(invoice:any){
     console.log(invoice)
     this.invoicesRef.push(invoice)
   }
   getInvoicesList(): Observable<any[]>{
    this.invoicesRef = this.db.list('invoices');
    return this.invoicesRef.valueChanges();
   }
}
