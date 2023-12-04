import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Animation
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { sidebarComponent } from './components/sidebar/sidebar.component';
import { TooltipDirective } from './bibliotecasJS/tooltip/tooltip.directive';


// NGX Bootstrap Icons
import {
  NgxBootstrapIconsModule,
  chevronDown,
  houseFill,
  plus,
  graphUp,
  peopleFill,
  personSquare,
  folder,
  folder2Open,
  x,
  list,
  trash,
  pencilFill,
  tools,
  fileEarmarkPlus,
  search,
  paperclip,
  boxArrowLeft,
  chevronDoubleLeft,
  collectionFill,
} from 'ngx-bootstrap-icons';

// Select some icons (use an object, not an array)
const icons = {
  chevronDown,
  houseFill,
  plus,
  graphUp,
  peopleFill,
  personSquare,
  folder,
  folder2Open,
  x,
  list,
  trash,
  pencilFill,
  tools,
  fileEarmarkPlus,
  search,
  paperclip,
  boxArrowLeft,
  chevronDoubleLeft,
  collectionFill,
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    sidebarComponent,
    TooltipDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBootstrapIconsModule.pick(icons),
    BrowserAnimationsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
