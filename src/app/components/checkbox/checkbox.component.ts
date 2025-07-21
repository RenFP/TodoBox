import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  standalone: false,
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css'
})
export class CheckboxComponent {
  @Input() idNumber:number | undefined = 0;
  @Input() checked:boolean = false;
  @Output() checkedChange = new EventEmitter<boolean>();
  toggleChecked() {
    this.checkedChange.emit(!this.checked);
  }
}
