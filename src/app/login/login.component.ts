import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from '../common/validations/password.validator';
import { AuthService } from 'src/app/common/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router){
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  login(){
    let credentials = this.form.value;
    this.authService.login(
      credentials,
      () => this.performRouting(),
      () => console.log("Wrong credentials. Please try again!")
    )
    
  }

  validate_control(control: AbstractControl | null){
    if (control?.touched && control?.invalid)
      return 'invalid';
    if (control?.touched && control?.valid)
      return 'valid'
    else return 'unknown'
  }

  performRouting(){
    this.router.navigate(['chat'])
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
