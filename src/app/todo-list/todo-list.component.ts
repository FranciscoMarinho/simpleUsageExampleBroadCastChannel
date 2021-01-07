import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {

  @ViewChild('inputValor') inputValor:ElementRef;

  todoList = [];

  brodaCastChannel: BroadcastChannel;
  readonly CHANNEL = 'todoChannel'

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.brodaCastChannel) {
      this.brodaCastChannel.close();
    }
  }

  addItem() {
    this.todoList.push(this.inputValor.nativeElement.value);
  }

}
