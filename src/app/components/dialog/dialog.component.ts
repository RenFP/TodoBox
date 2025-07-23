import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  statusValidation: boolean = false;

  formValidation() {
    if (
      this.item &&
      this.item.name &&
      this.item.name.length > 0 &&
      this.item.startTask &&
      this.item.endTask &&
      this.item.dateTask &&
      new Date(this.item.startTask).getTime() < new Date(this.item.endTask).getTime()
    ) {
      this.statusValidation = true;
    } else {
      this.statusValidation = false;
    }
  }
  editTask() {
    this.formValidation();
    if (this.statusValidation) {
      this.onEditTask.emit(this.item);
      this.visibleChange.emit(false);
    }
  }
  addTask() {
    this.formValidation();
    if (this.statusValidation) {
      this.onAddTask.emit(this.item);
      this.visibleChange.emit(false);
    }
  }

}
