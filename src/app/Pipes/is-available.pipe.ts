import { Pipe, PipeTransform } from '@angular/core';
import { StateInterface } from '../Models/state';

@Pipe({
  name: 'isAvailable'
})
export class IsAvailablePipe implements PipeTransform {

  transform(values: StateInterface[], ...args: StateInterface[]): any {
    return values.filter((x)=> x.available);
    
  }

}
