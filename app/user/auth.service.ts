import { Injectable } from '@angular/core';
import {IUser} from './user.model.ts'

@Injectable()
export class AuthService {
  public currentUser:IUser

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: Math.random(),
      userName: userName,
      firstName: 'John',
      lastName: 'Papa'
    }
  }
  
  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName:string, lastName:string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
