import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCakeComponent } from './show-cake.component';

describe('ShowCakeComponent', () => {
  let component: ShowCakeComponent;
  let fixture: ComponentFixture<ShowCakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
