import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule, ReactiveFormsModule],
      declarations: [ LoginFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid when empty', ()=> {
    expect(component.form.valid).toBeFalsy()
  });

  it('should have email field invalid when empty', () => {
    let email = component.form.controls['email'];
    expect(email.valid).toBeFalsy();
    expect(email.errors['required']).toBeTruthy();
  });

  it('should have email field invalid when email is not right pattern', () => {
    let email = component.form.controls['email'];
    email.setValue("test");
    expect(email.valid).toBeFalsy();
    expect(email.errors['pattern']).toBeTruthy();
  });

  it('should have email field be valid when email is of right pattern', () => {
    let email = component.form.controls['email'];
    email.setValue("test@test.com");
    expect(email.valid).toBeTruthy();
    expect(email.errors).toBeFalsy();
  });


});
