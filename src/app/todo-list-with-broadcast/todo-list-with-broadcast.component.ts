import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo-list-with-broadcast',
  templateUrl: './todo-list-with-broadcast.component.html',
  styleUrls: ['./todo-list-with-broadcast.component.scss']
})
export class TodoListWithBroadcastComponent implements OnInit, OnDestroy {
  
  @ViewChild('inputValor') inputValor:ElementRef;

  todoList = [];

  brodaCastChannel: BroadcastChannel;
  readonly CHANNEL = 'todoChannel'
  
  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.brodaCastChannel = new BroadcastChannel(this.CHANNEL);
    this.brodaCastChannel.onmessage = (event)=> this.handlerMessagem(event);
  }

  ngOnDestroy(): void {
    if (this.brodaCastChannel) {
      this.brodaCastChannel.close();
    }
  }
  
  addItem() {
    this.todoList.push(this.inputValor.nativeElement.value);
    this.brodaCastChannel.postMessage(this.todoList);
  }

  handlerMessagem(event: MessageEvent) {
    if (event && event.isTrusted && event.data) {
      this.todoList = event.data
      this.changeDetector.detectChanges();
    }
    
  }
}
