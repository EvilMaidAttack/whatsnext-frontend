import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortText'
})
export class ShortTextPipe implements PipeTransform {

  transform(value: string, maxLength: number = 30): string | null {
    if (!value) return null;

    const result = value.substring(0, maxLength) + "...";
    return result;
  }

}
