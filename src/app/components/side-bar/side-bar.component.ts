import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  standalone: false,
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  @Output() onFilterTodoList = new EventEmitter<string>();
  @Input() counter: number[] = [0, 0];

  selectedFilter: string = '';

  setFilter(filter: string) {
    this.selectedFilter = filter;
    this.onFilterTodoList.emit(filter);
  }
}
