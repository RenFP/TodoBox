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
  todoListFiltered: ITodoItem[] = [];
  currentFilter: string = 'pending'; // ou o valor padrão desejado
  counter: [number, number] = [0, 0];
  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.getTodoList().then((data) => {
      this.todoList = data as ITodoItem[];
      this.updateFilteredList();
    });
  }

  addTask(dados: ITodoItem) {
    this.todoService.addTodoItem(dados);
    this.todoList.push(dados);
    this.updateFilteredList();
  }
  terminateTask(id: number) {
    this.todoService.terminateTodoItem(id);
    this.updateFilteredList();
  }
  toggleDarkMode() {
    const element = document.querySelector('html');
    element?.classList.toggle('my-app-dark');
  }
  filterTodoList(status: string) {
    this.currentFilter = status;
    this.updateFilteredList();
  }

  updateFilteredList() {
    this.todoListFiltered = this.todoList.filter(item => item.status === this.currentFilter);
    this.counter[0] = this.todoList.filter(item => item.status === 'pending').length;
    this.counter[1] = this.todoList.filter(item => item.status === 'completed').length;
  }
}
