import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'
import { AuthService } from './auth.service'

@Component({
  templateUrl: 'app/user/profile.component.html'
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private router:Router, private authService:AuthService) {
  }

  ngOnInit() {
    var firstName = new FormControl();
    var lastName = new FormControl();

    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName,
    })
  } 

  cancel() {
    this.router.navigate(['events']);
  }

  saveProfile(formValues) {
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
    this.router.navigate(['events']);
  }


}