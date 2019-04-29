import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {TabViewModule} from 'primeng/tabview';
import { AddressComponent } from './address/address.component';
import { ValueComponent } from './value/value.component';
import {TableModule} from 'primeng/table';
import {ContextMenuModule} from 'primeng/contextmenu';
import { HttpClientModule } from '@angular/common/http';
import { TermsComponent } from './terms/terms.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, TabViewModule, TableModule, ContextMenuModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, AddressComponent, ValueComponent, TermsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
