import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'language'
})
export class LanguagePipe implements PipeTransform {

  transform(value: number): string {
    return value === 0 ? 'Latin' : 'Greek';
  }

}
