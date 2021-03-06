import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ HomeComponent} from "./home/home.component";
import { ListeComponent } from './liste/liste.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'liste', component:ListeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
