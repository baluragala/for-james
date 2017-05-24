import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerOf'
})
export class PowerOfPipe implements PipeTransform {

  transform(value: any, topower:number, surplus:number): number {
    return Math.pow(value,topower) + surplus; 
  }

}
