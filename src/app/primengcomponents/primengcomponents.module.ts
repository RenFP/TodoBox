import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Dialog,
    ButtonModule,
    InputTextModule,
    AvatarModule,
    DatePickerModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    Dialog,
    ButtonModule,
    InputTextModule,
    AvatarModule,
    DatePickerModule,
    FormsModule]
})
export class PrimengcomponentsModule { }
