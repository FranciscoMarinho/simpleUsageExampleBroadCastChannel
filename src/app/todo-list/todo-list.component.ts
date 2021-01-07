import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {

  @ViewChild('inputValor') inputValor:ElementRef;

  todoList = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  addItem() {
    this.todoList.push(this.inputValor.nativeElement.value);
  }

}
