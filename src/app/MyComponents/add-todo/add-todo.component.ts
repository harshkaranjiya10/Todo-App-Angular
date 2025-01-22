import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Todo } from '../../Todo'

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule], // Import FormsModule here
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'] 
})
export class AddTodoComponent {
  title: any;
  desc: any;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

    onSubmit() {
    const todo = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true
    }
    console.log('Title:', this.title);
    console.log('Description:', this.desc);
    this.todoAdd.emit(todo); 
  }
}