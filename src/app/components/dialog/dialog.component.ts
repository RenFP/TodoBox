import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { ITodoItem } from '../../interfaces/todoitem';

@Component({
  selector: 'app-dialog',
  standalone: false,
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  @Input() visible: boolean = false;
  @Input() item: ITodoItem = {} as ITodoItem;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() onAddTask = new EventEmitter<any>();
  @Output() onEditTask = new EventEmitter<any>();

  editTask() {
    this.onEditTask.emit(this.item); 
    this.visibleChange.emit(false);   
  }
  addTask() {    
    this.onAddTask.emit(this.item);      
    this.visibleChange.emit(false);
  }
}
