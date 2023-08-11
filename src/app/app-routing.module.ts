import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutSectionComponent } from './about-section/about-section.component';
import { GridComponent } from './grid/grid.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path: 'about-section', component: AboutSectionComponent}, 
  {path: 'home-page', component: HomePageComponent},
  {path: 'grid', component: GridComponent},
  {path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
