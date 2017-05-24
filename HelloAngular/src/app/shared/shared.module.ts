import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerOfPipe } from './power-of.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PowerOfPipe],
  exports:[PowerOfPipe]
})
export class SharedModule { }
