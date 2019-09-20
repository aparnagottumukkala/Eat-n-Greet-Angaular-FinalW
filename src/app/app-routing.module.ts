import { MyOrdersComponent } from './my-orders/my-orders.component';
import { NewpostmealComponent } from './newpostmeal/newpostmeal.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StepperSignupComponent } from './stepper-signup/stepper-signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NewhomeComponent } from './newhome/newhome.component';
import { BookamealComponent } from './bookameal/bookameal.component';


const routes: Routes = [
  {
    path: 'signup', component: StepperSignupComponent
  },
  {
    path: '', component: LoginComponent
  },
  {
    path: 'home', component: NewhomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'postmeal', component: NewpostmealComponent
  },
  {
    path: 'myorders', component: MyOrdersComponent
  },
  {
    path: 'bookameal', component: BookamealComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents = [StepperSignupComponent, NewhomeComponent, HomeComponent, NewpostmealComponent, MyOrdersComponent,
  BookamealComponent];
