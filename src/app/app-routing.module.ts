import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjetsComponent } from './pages/projets/projets.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'projets', component: ProjetsComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
