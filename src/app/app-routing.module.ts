import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
 {
   path:'',
   component:HomeComponent,
   pathMatch:'full'
 },
 {
   path:'login',
  component:LoginComponent, 
  pathMatch:'full'
  },
  {
    path:'register',
  component:RegisterComponent,
  pathMatch:'full'
},
{
  path:'appHome',
component:AppHomeComponent,
pathMatch:'full'
},
{
  path:'addBook',
component:AddBookComponent,
pathMatch:'full'
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
