import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logginUser;
  constructor(private user: UserService) { }

  ngOnInit(): void {
    this.logginUser = this.user.getUser();
  }

}
