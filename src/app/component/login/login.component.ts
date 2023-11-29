import { Component, OnInit } from '@angular/core';
import { LoginSetting } from '../../page/home/home.component.constant';

@Component({
  selector: 'chat-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  loginDialog = new LoginSetting();

  constructor() {}

  ngOnInit(): void {}
}
