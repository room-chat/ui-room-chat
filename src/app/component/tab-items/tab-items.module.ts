import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabItemsComponent } from './tab-items.component';



@NgModule({
  declarations: [
    TabItemsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [TabItemsComponent]
})
export class TabItemsModule { }
