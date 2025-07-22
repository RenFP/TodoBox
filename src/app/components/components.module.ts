import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { PrimengcomponentsModule } from '../primengcomponents/primengcomponents.module';
import { DialogFormComponent } from './dialog-form/dialog-form.component';
import { PipesModule } from '../pipes/pipes.module';
import { DialogComponent } from './dialog/dialog.component';    
import { DateRangePipe } from '../pipes/date-range.pipe';




@NgModule({
  declarations: [
    SideBarComponent,
    TodoItemComponent,
    TodoListComponent,
    HeaderComponent,
    ButtonComponent,
    CheckboxComponent,
    DialogFormComponent,
    DialogComponent,
  ],
  imports: [CommonModule, PrimengcomponentsModule, PipesModule],
  exports: [
    SideBarComponent,
    TodoItemComponent,
    TodoListComponent,
    HeaderComponent,
    ButtonComponent,
    CheckboxComponent,
    DialogFormComponent,
    DialogComponent,  
  ],
})  
export class ComponentsModule { }

