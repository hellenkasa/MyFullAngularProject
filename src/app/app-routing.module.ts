import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginpageComponent} from './loginpage/loginpage.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  // {path:'', redirectTo:'home' , pathMatch: 'full'},
  {path:'' , component: HomeComponent},
  {path:'loginpage',component:LoginpageComponent},
  {path:'login', component:LoginComponent},
  {path:'signup' , component:SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
