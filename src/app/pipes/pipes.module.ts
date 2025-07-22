import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockPipe } from './clock.pipe';
import { DateRangePipe } from './date-range.pipe';



@NgModule({
  declarations: [ClockPipe, DateRangePipe],
  imports: [
    CommonModule
  ],
  exports: [ClockPipe, DateRangePipe]
})
export class PipesModule { }
