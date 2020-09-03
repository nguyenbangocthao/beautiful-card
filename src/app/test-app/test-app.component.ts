import { FirstServiceService } from './../first-service.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-test-app',
	templateUrl: './test-app.component.html',
	styleUrls: [ './test-app.component.css' ]
})
export class TestAppComponent implements OnInit {
	@Input() hand;
	constructor(private firstService: FirstServiceService) {}

	ngOnInit(): void {}
	chooseName() {
		this.firstService.firstService();
	}
}
