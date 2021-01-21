import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  login(username: string) {
    localStorage.setItem('currentUser', username);
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  getUser() {
    return localStorage.getItem('currentUser');
  }
}
