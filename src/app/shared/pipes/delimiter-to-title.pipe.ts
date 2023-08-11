import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'delimiterToTitle',
})
export class DelimiterToTitlePipe implements PipeTransform {
  transform(value: string): string {
    const words = value.replace('/', '').split('-');

    const transformed = words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return transformed;
  }
}
