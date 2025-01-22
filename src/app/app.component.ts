// src/app/app.component.ts
import { Component } from '@angular/core';
import { TodosComponent } from './MyComponents/todos/todos.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    TodosComponent
  ]
})
export class AppComponent {
  title = '';
  desc = '';
  constructor() {
    /*  setTimeout(() => {
      this.title = "Harsh Karanjiya"
    }, 2000);
 */
  }
}
