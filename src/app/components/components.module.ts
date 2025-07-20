import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HeaderComponent } from './header/header.component';
import { ModalNewTaskComponent } from './modal-new-task/modal-new-task.component';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatepickerComponent } from './modal-new-task/datepicker/datepicker.component';




@NgModule({
  declarations: [
    SideBarComponent,
    TodoItemComponent,
    TodoListComponent,
    HeaderComponent,
    ModalNewTaskComponent,
    ButtonComponent,
    CheckboxComponent,
    DatepickerComponent,


  ],
  imports: [CommonModule, DatePickerModule, FormsModule, BrowserAnimationsModule],
  exports: [
    SideBarComponent,
    TodoItemComponent,
    TodoListComponent,
    HeaderComponent,
    ModalNewTaskComponent,
    ButtonComponent,
    CheckboxComponent,
  ],
})
export class ComponentsModule { }

