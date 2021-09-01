import { DataSource } from '@angular/cdk/table';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { invoice } from 'src/app/models/invoice';
import { FirebaseService } from 'src/app/services/firebase.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { AngularFireList } from '@angular/fire/database';


@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css'],
})
export class InvoiceListComponent implements OnInit{
  displayedColumns: string[] = ['number', 'customer', 'invoiceItems', 'action'];
  dataSource: MatTableDataSource<invoice>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private firebase: FirebaseService, private elRef: ElementRef) {
  }
  ngOnInit(): void {
    this.firebase.getItems().subscribe((response) =>{
      this.dataSource = new MatTableDataSource(response)
      this.dataSource.sort = this.sort
      this.dataSource.paginator = this.paginator;

    })
    this.firebase.getItems()
    console.log(this.firebase.items)
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  
  delete(item:string){
    this.firebase.delete(item)
  }

}
