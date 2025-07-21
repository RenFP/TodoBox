import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodoItem } from '../../interfaces/todoitem';


@Component({
  selector: 'app-todo-item',
  standalone: false,
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() todoItem: ITodoItem | undefined = undefined;
  @Output() onCheckedChange = new EventEmitter<number>()
}
