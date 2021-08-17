import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule, IConfig } from 'ngx-mask'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { InvoicesComponent } from './dashboard/invoices/invoices.component';
import { AddInvoiceComponent } from './dashboard/invoices/add-invoice/add-invoice.component';
import { MaterialModule } from './shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTextComponent } from './forms/mat-text/mat-text.component';
import { InvoiceItemsComponent } from './dashboard/invoices/add-invoice/invoice-items/invoice-items.component';
import { CreateInvoiceItemComponent } from './dashboard/invoices/add-invoice/invoice-items/create-invoice-item/create-invoice-item.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InvoicesComponent,
    AddInvoiceComponent,
    MatTextComponent,
    InvoiceItemsComponent,
    CreateInvoiceItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    NgxMaskModule.forRoot(),
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [CreateInvoiceItemComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
