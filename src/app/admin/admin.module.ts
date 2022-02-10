import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

let routing = RouterModule.forChild([
  { path: "auth", component: AuthComponent},
  { path: "main", component: AdminComponent, canActivate: [AuthGuard]},
  { path: "**", redirectTo: "auth"}
])

@NgModule({
  declarations: [ AuthComponent, AdminComponent],
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  providers: [AuthGuard]
})
export class AdminModule { }
