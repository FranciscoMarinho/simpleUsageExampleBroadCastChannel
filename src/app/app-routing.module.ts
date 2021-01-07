import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListWithBroadcastComponent } from './todo-list-with-broadcast/todo-list-with-broadcast.component';
import { TodoListComponent } from './todo-list/todo-list.component';


const routes: Routes = [
  {path: '',redirectTo: '/withoutAPI', pathMatch: 'full' },
  {path: 'withoutAPI', component: TodoListComponent},
  {path: 'withAPI', component: TodoListWithBroadcastComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
