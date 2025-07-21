import { Component, EventEmitter, Output } from '@angular/core';
import { ITodoItem } from '../../interfaces/todoitem';
import { formValidation } from '../../utils/formValidation';
import { ITodoItemStatus } from '../../interfaces/todoItemStatus';

@Component({
  selector: 'app-dialog-form',
  standalone: false,
  templateUrl: './dialog-form.component.html',
  styleUrl: './dialog-form.component.css'
})
export class DialogFormComponent {
  visible: boolean = true;
  @Output() onAddTask = new EventEmitter<any>();  
  inputValues: ITodoItem = {} as ITodoItem;
  resetForm() {
    this.inputValues = {
      name: undefined,
      dateTask: undefined,
      startTask: undefined,
      endTask: undefined,
      emojiTask: undefined,
    }
  }
  showDialog() {
    this.visible = true;
    this.resetForm();
  }
  addTask() {

    this.visible = false;
    this.onAddTask.emit(this.inputValues);
  }
}
