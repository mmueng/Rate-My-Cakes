import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeRateComponent } from './cake-rate.component';

describe('CakeRateComponent', () => {
  let component: CakeRateComponent;
  let fixture: ComponentFixture<CakeRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
