import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Grocery Component is the only component created for this project.
// It allows user to add, edit, delete items from shopping list.
// It also allows user to strike through an item to mark it as done.
import { GroceryComponent } from './grocery/grocery.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    GroceryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    //GroceryComponent
  ]
})
export class AppModule { }
