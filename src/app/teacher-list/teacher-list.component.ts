import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-list',
  template: `
    <h3 class=fontStyle>
     This is my component having Inline Style as well as Inline Template!
    </h3>
  `,
  styles: [
    '.fontStyle{color:Green}'
  ]
})
export class TeacherListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
