import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListWithBroadcastComponent } from './todo-list-with-broadcast.component';

describe('TodoListWithBroadcastComponent', () => {
  let component: TodoListWithBroadcastComponent;
  let fixture: ComponentFixture<TodoListWithBroadcastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListWithBroadcastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListWithBroadcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
