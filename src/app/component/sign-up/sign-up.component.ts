import { Component, OnInit } from '@angular/core';
import { RegisterSetting } from '../../page/home/home.component.constant';

@Component({
  selector: 'chat-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  hide: boolean = true;
  loginDialog = new RegisterSetting();

  constructor() { }

  ngOnInit(): void {
  }

}
