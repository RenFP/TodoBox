import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'clock',
  standalone: false
})
export class ClockPipe implements PipeTransform {
   transform(clock: Date | any): string {
    if (clock === undefined || clock === null) {
      return '';
    }
    return `${clock?.getHours()}:${clock?.getMinutes()}`;
  }

}
