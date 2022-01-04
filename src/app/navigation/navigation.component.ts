import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  
  connected = false;
  user: any = null;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    if (window.localStorage.getItem('mini-projet-user')) {
      this.user = JSON.parse(window.localStorage.getItem('mini-projet-user') ?? '{}');
      this.connected = true;
    }
  }
  
  logout() {
    window.localStorage.removeItem('mini-projet-user');
    this.connected = false;
    this.router.navigate(['auth']);
  }

}
