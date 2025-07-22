import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodoItem } from '../../interfaces/todoitem';


@Component({
  selector: 'app-todo-item',
  standalone: false,
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  visible: any;
  @Input() todoItem: ITodoItem = {} as ITodoItem;
  @Output() onCheckedChange = new EventEmitter<number>()
  @Output() onEdit = new EventEmitter<ITodoItem>()
  @Output() onDelete = new EventEmitter<number>()
  showDialog(item?: ITodoItem) {
    this.visible = true;    
  }
  
}
