import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'chat-button-login',
  templateUrl: './button-login.component.html',
  styleUrls: ['./button-login.component.scss']
})
export class ButtonLoginComponent implements OnInit {
  isLogin: boolean = false;
  
  @Input() title: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openLoginDialog(){
    const dialogRef = this.dialog.open(LoginComponent, {
      width: "500px",
      height: "550px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openRegisterDialog(){
    const dialogRef = this.dialog.open(SignUpComponent, {
      width: "500px",
      height: "550px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
