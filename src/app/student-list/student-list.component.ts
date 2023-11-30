import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  template: `
    <h3 class="fontStyle">
      This is my component with Inline-Template
    </h3>
  `,
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
