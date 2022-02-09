import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  username: string;
  password: string;
  errorMessage: string;

  constructor(private router: Router) {}

  authenticate(form: NgForm) {
    if (form.valid) {
    // Przeprowadzanie uwierzytelniania.
    this.router.navigateByUrl("/admin/main");
    } else {
      this.errorMessage = "Nieprawidłowe dane.";
    }
  }

  ngOnInit(): void {
  }

}
