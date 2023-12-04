import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jssistemas';
  sidebar = 'sidebar-opened'

  constructor(){
    setTimeout(() => {
      if (sessionStorage.getItem('sidebar') == 'sidebar-opened') {
        sessionStorage.setItem('sidebar', this.sidebar);
      }
      if (sessionStorage.getItem('sidebar') == null) {
        sessionStorage.setItem('sidebar', this.sidebar);
      }
    }, 300);
    
  console.log(this.sidebar)
  }

}
