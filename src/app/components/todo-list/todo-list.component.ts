import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodoItem } from '../../interfaces/todoitem';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input() todoList: ITodoItem[] = [];
  @Output() onCheckedChange = new EventEmitter<number>()
}
