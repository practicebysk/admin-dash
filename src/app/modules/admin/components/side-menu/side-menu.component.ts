import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  @Input() showIcons: boolean;
  side = [
    {
      id: 1,
      name: 'E-Commerc',
      icon: 'shopping_cart',
      route: 'ecommerc',
    },
    {
      id: 2,
      name: 'Dashboard',
      icon: 'house',
      route: 'dashboard',
    },
    {
      id: 3,
      name: 'Forms',
      icon: 'draw',
      route: 'forms',
    },
    {
      id: 4,
      name: 'Company',
      icon: 'supervised_user_circle',
      route: 'charts',
    },
    {
      id: 5,
      name: 'Auth',
      icon: 'lock_person',
      route: 'register',
    },
    {
      id: 6,
      name: 'Tables and Data',
      icon: 'table_rows',
      route: 'tables',
    },
    {
      id: 7,
      name: 'About',
      icon: 'info',
      route: 'info',
    },
  ];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  //Logout
  onLogout() {
    this.authService.logout();
  }
}
