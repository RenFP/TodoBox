import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-form',
  standalone: false,
  templateUrl: './dialog-form.component.html',
  styleUrl: './dialog-form.component.css'
})
export class DialogFormComponent {
  visible: boolean = false;
  inputName = '';
  startTime = '';
  endTime = '';
  rangeDate = '';

  showDialog() {
    this.visible = true;
  }
}
