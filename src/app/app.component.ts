import { Component } from '@angular/core';
import { GetTodoList } from './data/todoslist';
import { ITodoItem } from './interfaces/todoitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  todoList: ITodoItem[] = [];

  ngOnInit() {
    GetTodoList().then((data) => {
      this.todoList = data as ITodoItem[];
    });
  }

  
}
