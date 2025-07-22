import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateRange',
  standalone: false
})
export class DateRangePipe implements PipeTransform {

  transform(date: any): string {
    if (!date || date.length !== 2) return '';
    const [start, end] = date;
    const startDate = new Date(start);
    const endDate = new Date(end);

    
    const formatarData = (data: Date) => {
      const dia = String(data.getDate()).padStart(2, '0');
      const mes = String(data.getMonth() + 1).padStart(2, '0');
      return `${dia}/${mes}`;
    };

    return `${date[0] ? formatarData(startDate) : ''} - ${date[1] ? formatarData(endDate) : ''}`;
  }

}
