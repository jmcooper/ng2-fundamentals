import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { AuthService } from './auth.service'

@Component({
  templateUrl: 'app/user/profile.component.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left:10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; } 
    .error :-moz-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :ms-input-placeholder  { color: #999; }
  `],

})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName:FormControl
  private lastName:FormControl
  
  constructor(private router:Router, private authService:AuthService) {
  }

  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
    })
  } 

  cancel() {
    this.router.navigate(['events']);
  }

  validateFirstName() {
    return this.firstName.invalid && this.firstName.touched
  }

  validateLastName() {
    return this.lastName.invalid && this.lastName.touched
  }

  saveProfile(formValues) {
    if(this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
      this.router.navigate(['events']);
    }
  }


}