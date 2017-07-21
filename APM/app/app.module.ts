import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';

import {ProductListComponent} from './products/product-list.component';
import {ProductFilterPipe} from './products/product-filter.pipe';

import {StarComponent} from './shared/star.component';

@NgModule({
  imports: [ BrowserModule,
            FormsModule
            ],
  declarations: [ AppComponent,
                  ProductListComponent, //declaring directives
                  ProductFilterPipe,   //declaring pipe
                  StarComponent       //declaring directives
                ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
