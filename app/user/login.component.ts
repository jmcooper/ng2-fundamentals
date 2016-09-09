import { Component } from '@angular/core';
import { AuthService } from './auth.service'

@Component({
  templateUrl: 'app/user/login.component.html' 
})
export class LoginComponent {
  constructor(private authService:AuthService) {

  }

  login(formValues) { 
    this.authService.loginUser(formValues.userName, formValues.password)
  } 

}