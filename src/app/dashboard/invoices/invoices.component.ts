import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  constructor(private router: Router, private firebase: FirebaseService) { }

  ngOnInit(): void {
  }
  addInvoice(){
    this.router.navigate(['/addInvoice'])
  }

}
