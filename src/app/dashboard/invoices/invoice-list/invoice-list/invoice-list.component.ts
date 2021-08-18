import { DataSource } from '@angular/cdk/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { invoice } from 'src/app/models/invoice';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit{

  displayedColumns: string[] = ['number', 'customer', 'invoiceItems'];
  dataSource: MatTableDataSource<invoice>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  invoices: Observable<any>
  constructor(private firebase: FirebaseService) {
  }
  ngOnInit(): void {
    this.firebase.getInvoicesList().subscribe((response) =>{
      this.dataSource = new MatTableDataSource(response)
    })
    this.dataSource.sort = this.sort
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
