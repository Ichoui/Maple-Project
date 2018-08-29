import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyvalue'
})
export class KeyvaluePipe implements PipeTransform {

  transform(value: any, args: any[] = null): any {
    return Object.keys(value).map(key => Object.assign({key}, value[key]));
  }
}


