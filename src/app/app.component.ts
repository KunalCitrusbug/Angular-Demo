import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  alertFunction(Name:any){
    console.log("Hello " + Name);
  }
  funWelcome(){
    alert("Welcome to Angular Demo Project")
  }
}
