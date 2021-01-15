import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo-list-with-broadcast',
  templateUrl: './todo-list-with-broadcast.component.html',
  styleUrls: ['./todo-list-with-broadcast.component.scss']
})
export class TodoListWithBroadcastComponent implements OnInit, OnDestroy {
  
  @ViewChild('inputValue') inputValue:ElementRef;

  todoList = [];

  broadcastChannel: BroadcastChannel;
  readonly CHANNEL = 'todoChannel';
  
  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.broadcastChannel = new BroadcastChannel(this.CHANNEL);
    this.broadcastChannel.onmessage = (event) => this.handlerMessagem(event);
  }

  ngOnDestroy(): void {
    if (this.broadcastChannel) {
      this.broadcastChannel.close();
    }
  }
  
  addItem() {
    this.todoList.push(this.inputValue.nativeElement.value);
    this.broadcastChannel.postMessage(this.todoList);
  }

  handlerMessagem(event: MessageEvent) {
    if (event && event.isTrusted && event.data) {
      this.todoList = event.data;
      this.changeDetector.detectChanges();
    }
    
  }
}
