import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/main/home/home.page';
import { UtilitarioPage } from './pages/main/utilitario/utilitario.page';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'utilitarios', component: UtilitarioPage },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
