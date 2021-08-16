import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  addInvoice(){
    this.router.navigate(['/addInvoice'])
  }
}
