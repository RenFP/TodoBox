import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-new-task',
  standalone: false,
  templateUrl: './modal-new-task.component.html',
  styleUrls: ['./modal-new-task.component.css'],
})
export class ModalNewTaskComponent {
  modalVisible = false;
  fadeStatus = false;
  inputName = '';
  startTime = '';
  endTime = '';
  rangeDate = '';


  toogleModal() {
    this.fadeStatus = !this.fadeStatus;
    if (this.modalVisible) {
      setTimeout(() => (this.modalVisible = false), 500);
    } else {
      this.modalVisible = true;
    }
  }
}
