import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TestAppComponent } from './test-app/test-app.component';
import { ThaoApComponent } from './thao-ap/thao-ap.component';
@NgModule({
	declarations: [ AppComponent, TestAppComponent, ThaoApComponent ],
	imports: [ BrowserModule, AppRoutingModule, FormsModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
