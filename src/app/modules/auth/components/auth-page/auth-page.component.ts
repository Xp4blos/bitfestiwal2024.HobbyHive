import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.scss',
})
export class AuthPageComponent {
  constructor(private router: Router) {}

  registerNavigate(): void {
    this.router.navigate(['auth/form']);
  }
}
