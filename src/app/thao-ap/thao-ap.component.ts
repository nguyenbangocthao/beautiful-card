import { FirstServiceService } from './../first-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-thao-ap',
	templateUrl: './thao-ap.component.html',
	styleUrls: [ './thao-ap.component.css' ]
})
export class ThaoApComponent implements OnInit {
	chose;
	constructor(private firstService: FirstServiceService) {}

	ngOnInit(): void {}
}
