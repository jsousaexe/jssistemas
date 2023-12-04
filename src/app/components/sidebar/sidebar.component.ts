import { Component, OnInit } from '@angular/core';
import { SubItemAnimation } from 'src/app/services/animation';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations:[SubItemAnimation]
})
export class sidebarComponent implements OnInit {

  timeoutId: any;
  sidebar = 'sidebar-opened';

  // sub menu
  subCadastros = false;

  ngOnInit(): void {
    // Sidebar
    this.sidebar = 'sidebar-closed';
    setTimeout(() => {
      if (sessionStorage.getItem('sidebar') == 'sidebar-opened') {
        sessionStorage.setItem('sidebar', this.sidebar);
      }
      if (sessionStorage.getItem('sidebar') == null) {
        sessionStorage.setItem('sidebar', this.sidebar);
      }

      this.addClassBody();

    }, 300);

  }


  // abrir ou fechar sidebar
  togleSidebar() {
    if (this.sidebar === 'sidebar-opened') {
      this.sidebar = 'sidebar-closed';
    } else if (this.sidebar === 'sidebar-closed') {
      this.sidebar = 'sidebar-opened';
    }
    this.addClassBody();
  }

  addClassBody() {
    if (this.sidebar === 'sidebar-opened') {
      // adicionando class para manipular no scss
      document.body.classList.add('sidebar-opened');
      document.body.classList.remove('sidebar-closed');
    } else if (this.sidebar === 'sidebar-closed') {
      // adicionando class para manipular no scss
      document.body.classList.add('sidebar-closed');
      document.body.classList.remove('sidebar-opened');
    }
  }


}
