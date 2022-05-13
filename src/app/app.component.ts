import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  isUnchanged = false;

  checkUsername(): any {
    const testButton = document.getElementById('testButton') as HTMLInputElement;
    if (this.username !== '') {
      console.warn('username NOT empty. Yay! Enable button.');
      testButton.disabled = false;
    } else{
      console.warn('username is empty. Boo! No button fo you.');
      testButton.disabled = true;
    }
    this.username = 'Hello World';
  }

}


