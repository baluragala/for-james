import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  form:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      email:['',[Validators.required,Validators.pattern("[^@]*@[^@]*")]],
      password:['',[Validators.required,Validators.minLength(8)]]
    });
  }

  login(){
    //login logic goes here..
  }

}
