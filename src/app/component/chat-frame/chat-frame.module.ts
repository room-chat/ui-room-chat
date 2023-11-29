import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatFrameComponent } from './chat-frame.component';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [
    ChatFrameComponent
  ],
  imports: [
    CommonModule,
    HeaderModule
  ],
  exports: [ChatFrameComponent]
})
export class ChatFrameModule { }
