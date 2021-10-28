import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money'
  value: 'dollar'
})
export class MoneyPipe implements PipeTransform {

  transform(value: "name", ...args: unknown[]): unknown {
    return null;
  }

}
