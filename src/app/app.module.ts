import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListWithBroadcastComponent } from './todo-list-with-broadcast/todo-list-with-broadcast.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListWithBroadcastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
