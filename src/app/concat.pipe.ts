import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concat'
})
export class ConcatPipe implements PipeTransform {

  transform(values: Array<string>, joiner: string): string {
    return values.join(joiner);
  }

}
