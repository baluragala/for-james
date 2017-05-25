import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorDetailComponent } from './author-detail.component';
import { AuthorListComponent } from './author-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AuthorDetailComponent, AuthorListComponent]
})
export class AuthorsModule { }
