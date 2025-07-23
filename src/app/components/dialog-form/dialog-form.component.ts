import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-form',
  standalone: false,
  templateUrl: './dialog-form.component.html',
  styleUrl: './dialog-form.component.css'
})
export class DialogFormComponent {
  @Input() visible: boolean = false;
  @Output() onAdd = new EventEmitter<any>();  
  
}
