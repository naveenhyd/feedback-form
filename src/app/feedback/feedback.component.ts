import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-feedback',
	templateUrl: './feedback.component.html',
	styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

	feedbackForm;
	showMessage = false;
	@Input('username') user:string;
	constructor(private fb: FormBuilder) { }

	ngOnInit(): void {
		this.feedbackForm = this.fb.group({
			fullname: ['', Validators.required],
			email: ['', Validators.required],
			phone: [''],
			message: ['']
		});
	}

	onSubmit() {
		console.log('form submitted');
		this.showMessage = true;
	}

}
