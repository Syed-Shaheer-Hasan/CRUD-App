import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';



const routes: Routes = [
{ path: '', redirectTo: 'login', pathMatch: 'full' },
{path:'login',component:LoginComponent},
{path:'create', component: CreateComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
