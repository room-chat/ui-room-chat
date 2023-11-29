import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

import { SidebarModule } from '../../component/sidebar/sidebar.module';
import { AdvertiseSideModule } from '../../component/advertise-side/advertise-side.module';
import { ChatFrameModule } from '../../component/chat-frame/chat-frame.module';
import { HomeComponent } from './home.component';
import { HeaderModule } from '../../component/header/header.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    SidebarModule,
    AdvertiseSideModule,
    ChatFrameModule,
    HeaderModule
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
