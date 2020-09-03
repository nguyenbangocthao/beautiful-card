import { SectionAppService } from './section-app.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
	listCard = [
		{
			name: 'thao',
			clazz: '9',
			id: 'lop truong',
			anh: 'https://www.homecredit.vn/app/webroot/img/summer-prom/step-1-bg.png'
		},

		{
			name: 'Anh',
			clazz: '9',
			id: 'hoc sinh',
			anh: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRiZK9wa3RWN5DzaFIn_CMkAur8vd1PV6BQYg&usqp=CAU'
		},
		{
			name: 'An',
			clazz: '9',
			id: 'Lop pho',
			anh: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjS6LYvF0m1Rw4wGM0Xdm6mYhtMem2xDYiPw&usqp=CAU'
		},
		{
			name: 'Linh',
			clazz: '9',
			id: 'hoc sinh',
			anh: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5XTzK1G6vqmNRc-gwyc-0GxvMAE5_zuuOew&usqp=CAU'
		},
		{
			name: 'Hanh',
			clazz: '9',
			id: 'To truong',
			anh: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBXOeQzBXxQDTKkkC_8wcp-vMGh-5dRXhWeg&usqp=CAU'
		},
		{
			name: 'Huyen',
			clazz: '9',
			id: 'To truong',
			anh: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSSJkXniA5Xh-gASrV_OoBqbZinfMceOSaVg&usqp=CAU'
		},
		{
			name: 'Vanh',
			clazz: '9',
			id: 'hoc sinh',
			anh: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMLp2SKd1aO7voCrt9YWnVpTcoUmhcya6lmA&usqp=CAU'
		},
		{
			name: 'Nam',
			clazz: '9',
			id: 'hoc sinh',
			anh: 'https://lienquan.garena.vn/asset/images/img-down-m.png'
		}
	];
	candy = 'thitho';
	constructor(private secTion: SectionAppService) {}
	do() {
		this.secTion.Do();
	}
	ngOnInit() {}
}
