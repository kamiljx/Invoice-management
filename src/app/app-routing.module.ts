import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddInvoiceComponent } from './dashboard/invoices/add-invoice/add-invoice.component';
import { EditInvoiceComponent } from './dashboard/invoices/invoice-list/edit-invoice/edit-invoice.component';
import { InvoicesComponent } from './dashboard/invoices/invoices.component';

const routes: Routes = [
  { path: "", component: DashboardComponent,
      children:[
        { path: "", component: InvoicesComponent },
        { path: "addInvoice", component: AddInvoiceComponent},
        { path: "edit/:id", component: EditInvoiceComponent }
      ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
