import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {TabViewModule} from 'primeng/tabview';
import { TableOneComponent } from './table-one/table-one.component';
import { TableTwoComponent } from './table-two/table-two.component';
import {TableModule} from 'primeng/table';
import {ContextMenuModule} from 'primeng/contextmenu';


@NgModule({
  imports:      [ BrowserModule, FormsModule, TabViewModule, TableModule, ContextMenuModule ],
  declarations: [ AppComponent, HelloComponent, TableOneComponent, TableTwoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
