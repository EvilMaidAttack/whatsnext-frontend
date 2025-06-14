import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from '../common/validations/password.validator';
import { AuthService } from 'src/common/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService){
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, PasswordValidators.passwordRequirementsMustMeet]]
    })
  }

  login(){
    console.log(this.form.controls)
    //this.authService.login()
    
  }

  validate_control(control: AbstractControl | null){
    if (control?.touched && control?.invalid)
      return 'invalid';
    if (control?.touched && control?.valid)
      return 'valid'
    else return 'unknown'
  }

  debug(x:any){
    console.log(x);
    
  }

  get email(){
    return this.form.get("email");
  }

  get password(){
    return this.form.get("password");
  }


}
