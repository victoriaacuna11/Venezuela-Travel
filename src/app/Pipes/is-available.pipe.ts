import { Pipe, PipeTransform } from '@angular/core';
import { StateInterface } from '../Models/state';

@Pipe({
  name: 'isAvailable'
})
export class IsAvailablePipe implements PipeTransform {

  transform(values: any[], ...args: any[]): any {
    return values.filter((x)=> x.available);
    
  }

}
