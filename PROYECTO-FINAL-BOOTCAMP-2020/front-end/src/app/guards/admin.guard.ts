import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { TrailsService } from '../services/trails.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(
    private usersService: UsersService,
    private trailsService: TrailsService,
    private router: Router
  ) {}

  canActivate() {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    //jwt
    if (!token) {
      //alert
      return false;
    }

    if (role !== 'admin') {
      //alert
      return false;
    }

    return true;
  }
}
