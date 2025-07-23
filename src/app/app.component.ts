import { Component, inject } from '@angular/core';
import { ITodoItem } from './interfaces/todoitem';
import { TodoService } from './data/todoservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  visible: boolean = false;
  todoList: ITodoItem[] = [];
  todoListFiltered: ITodoItem[] = [];
  currentFilter: string = '';
  counter: [number, number] = [0, 0];
  selectedItem: ITodoItem = {} as ITodoItem;
  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.getTodoList().then((data) => {
      this.todoList = data as ITodoItem[];
      this.updateFilteredList();
    });
  }
  showDialog(dados: ITodoItem) {
    this.selectedItem = dados;
    this.visible = true
  }
  addTask(dados: ITodoItem) {
    this.todoService.addTodoItem(dados);
    this.todoList.push(dados);
    this.updateFilteredList();
  }
  async terminateTask(id: number) {
    await this.delayAnimation();
    const item = this.todoList.find(item => item.id === id);
    if (item?.status === 'pending') {
      this.todoService.terminateTodoItem(id);
      this.updateFilteredList();
    } else {
      item!.status = 'pending';
      this.todoService.updateTodoItem(item!);
      this.updateFilteredList();
    }
  }
  deleteTask(id: number) {
    this.todoService.deleteTodoItem(id);
    this.updateFilteredList();
  }

  filterTodoList(status: string) {
    this.currentFilter = status;
    this.updateFilteredList();
  }
  editTask(dados: ITodoItem) {
    this.todoService.updateTodoItem(dados);
    this.updateFilteredList();
  }

  updateFilteredList() {
    this.todoListFiltered = this.todoList.filter(item => {
      if (this.currentFilter === '') {
        return item.status === 'pending' || item.status === 'completed';
      } else {
        return item.status === this.currentFilter;
      }
    });
    this.counter[0] = this.todoList.filter(item => item.status === 'pending').length;
    this.counter[1] = this.todoList.filter(item => item.status === 'completed').length;
  }

  delayAnimation() {
    setTimeout(() => {
      this.updateFilteredList();
    }, 700);
  }
}
