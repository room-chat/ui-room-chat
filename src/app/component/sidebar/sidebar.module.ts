import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { TabItemsModule } from '../tab-items/tab-items.module';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, TabItemsModule],
  exports: [SidebarComponent],
})
export class SidebarModule {}
