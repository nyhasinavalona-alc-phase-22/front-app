import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'url',
})
export class UrlPipe implements PipeTransform {
  transform(value: string, ...args: string[]): any {
    return `/assets/images/posters/${value}`;
  }
}
