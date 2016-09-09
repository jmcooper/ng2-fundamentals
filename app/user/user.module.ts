import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { userRoutes } from './user.routes'
import { UserProfileComponent } from './user-profile.component'
import { LoginComponent } from './login.component'
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service'

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild(userRoutes) ],
  declarations: [
    UserProfileComponent,
    LoginComponent
  ],
  providers: [
    
  ]
})
export class UserModule { }
