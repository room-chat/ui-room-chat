import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonLoginComponent } from './button-login.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { LoginModule } from '../login/login.module';
import { SignUpModule } from '../sign-up/sign-up.module';



@NgModule({
  declarations: [
    ButtonLoginComponent 
  ],
  imports: [
    CommonModule,
    MatButtonModule, MatDialogModule,
    LoginModule,
    SignUpModule
  ],
  exports: [ButtonLoginComponent]
})
export class ButtonLoginModule { }
