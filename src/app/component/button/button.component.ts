import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'chat-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  isLogin: boolean;
  @Input() btnContent: string;

  constructor() { }

  ngOnInit(): void {
  }

}
