import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	loginForm;
	constructor(private fb: FormBuilder, private user: UserService, private router: Router) { }

	ngOnInit(): void {
		this.loginForm = this.fb.group({
			username: ['']
		})
	}

	onSubmit() {
		console.log(this.loginForm.value.username);
		if (this.loginForm.value.username) {
			this.user.login(this.loginForm.value.username);
			this.router.navigate(['/home'])
		} else {
			return;
		}
	}

}
