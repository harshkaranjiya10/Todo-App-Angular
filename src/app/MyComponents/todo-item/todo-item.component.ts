import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo'
@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  
  @Input() todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  // create custom events and communicate between components
  constructor() { }

  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log("Delete button has been pressed");
    console.log(todo);
  }
}
