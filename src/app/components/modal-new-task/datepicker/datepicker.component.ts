import { Component } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  standalone: false,
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.css'
})
export class DatepickerComponent {
  date: Date[] | undefined;


}
