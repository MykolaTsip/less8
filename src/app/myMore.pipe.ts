import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMore'
})
export class MyMorePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    return value + args[1] + args[2];
  }

}
