import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockPipe } from './clock.pipe';



@NgModule({
  declarations: [ClockPipe],
  imports: [
    CommonModule
  ],
  exports: [ClockPipe]
})
export class PipesModule { }
