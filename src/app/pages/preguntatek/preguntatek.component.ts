import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-preguntatek',
  templateUrl: './preguntatek.component.html',
  styleUrls: ['./preguntatek.component.scss']
})
export class Preguntatek {
  loading = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  openAdmin() {
    this.router.navigate(['admin']);
  }

  signIn(email: string, password: string) {
    this.authService.SignIn(email, password);
  }
}
