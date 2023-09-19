import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class Main implements OnInit {
  loading = false;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  openAdmin() {
    this.router.navigate(['admin']);
  }
}
