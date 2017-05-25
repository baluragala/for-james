import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerOfPipe } from './power-of.pipe';
import { NotFoundComponentComponent } from './not-found-component.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PowerOfPipe, NotFoundComponentComponent],
  exports:[PowerOfPipe, NotFoundComponentComponent]
})
export class SharedModule { }
