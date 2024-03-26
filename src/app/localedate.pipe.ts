import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localedate'
})
export class LocaledatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
