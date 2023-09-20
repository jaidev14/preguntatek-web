import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginDialogComponent } from 'src/app/components/login-dialog/login-dialog.component';
import { AuthService } from 'src/app/services/auth.service';
declare function init_frogs(): void;

@Component({
  selector: 'app-preguntatek',
  templateUrl: './preguntatek.component.html',
  styleUrls: ['./preguntatek.component.scss']
})
export class Preguntatek {
  loading = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openAdmin() {
    // init_frogs();
    if (this.authService.user.uid == undefined) {
      this.openLoginDialog();
    } else {
      this.router.navigate(['admin']);
    }
  }

  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginDialogComponent, { });

    dialogRef.afterClosed().subscribe(result => {
      this.authService.signIn(result.email, result.password).then(() => {
        this.router.navigate(['admin']);
      });
      console.log('The login dialog was closed');
    });
  }
}
