import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.css']
})
export class EditInvoiceComponent implements OnInit {

  state$: Observable<object>
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.state$ = this.activatedRoute.paramMap
      .pipe(map(()=> window.history.state))
      console.log(this.state$)
  }

}
