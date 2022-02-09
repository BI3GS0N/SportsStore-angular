import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';

let routing = RouterModule.forChild([
  {path: "auth", component: AuthComponent},
  { path: "main", component: AdminComponent},
  { path: "**", redirectTo: "auth"}
])

@NgModule({
  declarations: [ AuthComponent, AdminComponent],
  imports: [
    CommonModule,
    FormsModule,
    routing
  ]
})
export class AdminModule { }
