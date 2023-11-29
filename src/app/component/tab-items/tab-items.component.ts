import { Component, Input, OnInit } from '@angular/core';
import { TabItemsSetting } from './tab-item.component.i';

@Component({
  selector: 'chat-tab-items',
  templateUrl: './tab-items.component.html',
  styleUrls: ['./tab-items.component.scss']
})
export class TabItemsComponent implements OnInit {

  @Input() tabsItem: TabItemsSetting[];

  constructor() { 
    this.tabsItem = [
      {
        style: {
          fontsize: "20",
          color: "black",
          weigth: 300,
          margin: 44
        },
        content: "Home"
      },
      {
        style: {
          fontsize: "20",
          color: "black",
          weigth: 300,
          margin: 44
        },
        content: "Analyst"
      },
      {
        style: {
          fontsize: "20",
          color: "black",
          weigth: 300,
          margin: 44
        },
        content: "Calendar"
      },
      {
        style: {
          fontsize: "20",
          color: "black",
          weigth: 300,
          margin: 44
        },
        content: "Settings"
      }
    ];
  }

  ngOnInit(): void {
  }

}
