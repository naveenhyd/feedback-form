import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	
	logginUser;

	constructor(private user: UserService) { }

	ngOnInit(): void {
		this.logginUser = this.user.getUser();
	}

}
