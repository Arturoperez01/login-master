import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  { path: 'home',loadChildren: './page/home/home.module#HomeModule'},//*/,
  { path: 'login', loadChildren: './page/login/login.module#LoginModule'},
  { path: 'profile', loadChildren: './_auth/profile/profile.module#ProfileModule'},
  
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
