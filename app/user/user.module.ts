import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { userRoutes } from './user.routes'
import { UserProfileComponent } from './user-profile.component'

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild(userRoutes) ],
  declarations: [
    UserProfileComponent 
  ],
  providers: [
  ]
})
export class UserModule { }
