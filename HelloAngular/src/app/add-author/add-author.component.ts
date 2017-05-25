import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styles: []
})
export class AddAuthorComponent implements OnInit {


 /*
  
  {
    firstName:
    lastName:
    address: {
      street:
      city:
      state:
    }
  }
 */

  authorForm:FormGroup;
  //fb:FormBuilder;

  isFormSubmitted:boolean=false;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    // this.authorForm = new FormGroup({
    //   firstName : new FormControl('',[Validators.required, Validators.minLength(5)]),
    //   lastName : new FormControl(),
    //   address : new FormGroup({
    //     street : new FormControl(),
    //     city : new FormControl(),
    //     state: new FormControl()
    //   })
    // });

    this.authorForm = this.fb.group({
      firstName:['',[Validators.required, Validators.minLength(5)]],
      lastName:'',
      address: this.fb.group({
         street:'',
         city:'',
        state:''
      })
    })

    console.log(this.authorForm.valueChanges.subscribe(e => console.log(e)));

  }

  ngDoCheck(){
    //console.log(this.authorForm);
  }

  onSubmit(){
    this.isFormSubmitted=true;
  }

  populate(){
    let a = {
      firstName1:'zwww',
      lastName:'sdfsdf',
      address:{
        street:'st123',
        city:'Newyark',
        state:'NY'
      },
      email:'zeo@zeo.com'
    }

    this.authorForm.patchValue(a);
  }
}
