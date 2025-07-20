import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  standalone: false,
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() emojiTask: string | undefined = ''
  @Input() nameTask: string | undefined = 'Tarefa...';
  @Input() dateTask: string | undefined = '2025-07-24T00:00:00.000Z';
  @Input() timeTask: string | undefined = '08.00 - 07.00';
  @Input() idNumber:number= 0;
}
