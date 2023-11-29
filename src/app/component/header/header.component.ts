import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeaderSettings } from './header.component.constant';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'chat-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerSettings = HeaderSettings;
  @Output() login = new EventEmitter();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
