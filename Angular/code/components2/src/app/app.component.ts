import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'components2';
  val = ''
  val2=''
  send() {
    this.val2=this.val
  }
}
