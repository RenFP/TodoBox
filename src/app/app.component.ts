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
  mockTodo: ITodoItem[] = [
    {
      id: 1,
      name: 'Finalizar relatório',
      dateTask: [new Date('2025-07-24'),new Date('2025-07-27')],
      startTask: new Date('2025-07-24T09:00:00'),
      endTask: new Date('2025-07-24T11:00:00'),
      status: 'Em andamento',
    },
    {
      id: 2,
      name: 'Reunião com equipe',
      dateTask: [new Date('2025-07-24'),new Date('2025-07-27')],
      startTask: new Date('2025-07-24T14:00:00'),
      endTask: new Date('2025-07-24T15:00:00'),
      status: 'Pendente',
    },
  ];
  todoListFiltered: ITodoItem[] = this.mockTodo  // []
  currentFilter: string = '';
  counter: [number, number] = [0, 0];
  selectedItem: ITodoItem = {} as ITodoItem;
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodoList().then((data) => {
      this.todoList = data as ITodoItem[];
      ///this.updateFilteredList();
    });
  }
  showDialog(dados: ITodoItem) {
    this.selectedItem = dados;
    this.visible = true;
  }
  addTask(dados: ITodoItem) {
    this.todoService.addTodoItem(dados);
    this.todoList.push(dados);
    this.updateFilteredList();
  }
  terminateTask(id: number) {
    const item = this.todoList.find((item) => item.id === id);
    setTimeout(() => {
      if (item?.status === 'pending') {
        this.todoService.terminateTodoItem(id);
        this.updateFilteredList();
      } else {
        item!.status = 'pending';
        this.todoService.updateTodoItem(item!);
        this.updateFilteredList();
      }
    }, 300);
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
    this.todoListFiltered = this.todoList.filter((item) => {
      if (this.currentFilter === '') {
        return item.status === 'pending' || item.status === 'completed';
      } else {
        return item.status === this.currentFilter;
      }
    });
    this.counter[0] = this.todoList.filter(
      (item) => item.status === 'pending'
    ).length;
    this.counter[1] = this.todoList.filter(
      (item) => item.status === 'completed'
    ).length;
  }

  delayAnimation() {}
}
