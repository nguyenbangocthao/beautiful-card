import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThaoApComponent } from './thao-ap.component';

describe('ThaoApComponent', () => {
  let component: ThaoApComponent;
  let fixture: ComponentFixture<ThaoApComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThaoApComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThaoApComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
