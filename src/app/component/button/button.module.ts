import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { ButtonLoginModule } from '../button-login/button-login.module';



@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    ButtonLoginModule
  ],
  exports: [ButtonComponent]
})
export class ButtonModule { }
