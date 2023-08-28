import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pStatus'
})
export class PStatusPipe implements PipeTransform {

  transform(value: number, format: string): string {
    if (format == 'short') {
      if (value === 10) {
        return '党员';
      } else if (value === 20) {
        return '团员';
      } else if (value === 30) {
        return '群众';
      } else {
        return '其他';
      }
    } else if (format == 'long') {
      if (value === 10) {
        return '中国共产党党员';
      } else if (value === 20) {
        return '中国共青团团员';
      } else if (value === 30) {
        return '中国人民群众';
      } else {
        return '其他';
      }
    }

    return 'error';
  }

}
