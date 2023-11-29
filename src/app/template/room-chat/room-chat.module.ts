import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomChatComponent } from './room-chat.component';



@NgModule({
  declarations: [
    RoomChatComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [RoomChatComponent]
})
export class RoomChatModule { }
