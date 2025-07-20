import { Component, inject } from '@angular/core';
import { GetTodoList } from './data/todoslist';
import { ITodoItem } from './interfaces/todoitem';
import { TodoService } from './data/todoservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  todoList: ITodoItem[] = [];


  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.getTodoList().then((data) => {
      this.todoList = data as ITodoItem[];
    });
  }


}
