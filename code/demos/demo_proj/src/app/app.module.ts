import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegComponent } from './reg/reg.component';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { SexPipe } from './sex.pipe';
import { PStatusPipe } from './p-status.pipe';


@NgModule({
  declarations: [
    AppComponent,
    RegComponent,
    TodoListComponent,
    EmpListComponent,
    SexPipe,
    PStatusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
