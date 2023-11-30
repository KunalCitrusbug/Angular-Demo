import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: [
    '.fontStyle{color:red}'
  ]
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
