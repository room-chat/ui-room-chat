import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { HomeModule } from './page/home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { SidebarModule } from './component/sidebar/sidebar.module';
import { AdvertiseSideModule } from './component/advertise-side/advertise-side.module';
import { ChatFrameModule } from './component/chat-frame/chat-frame.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    HomeModule,
    SidebarModule,
    AdvertiseSideModule,
    ChatFrameModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
