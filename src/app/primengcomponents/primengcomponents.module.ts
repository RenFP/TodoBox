import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogFormComponent } from './dialog-form/dialog-form.component';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DialogFormComponent],
  imports: [
    CommonModule,
    Dialog,
    ButtonModule,
    InputTextModule,
    AvatarModule,
    DatePickerModule,
    FormsModule
  ],
  exports: [DialogFormComponent, CommonModule,
    Dialog,
    ButtonModule,
    InputTextModule,
    AvatarModule,
    DatePickerModule,
    FormsModule]
})
export class PrimengcomponentsModule { }
