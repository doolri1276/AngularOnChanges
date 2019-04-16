import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoneInputBindComponent } from './none-input-bind.component';

describe('NoneInputBindComponent', () => {
  let component: NoneInputBindComponent;
  let fixture: ComponentFixture<NoneInputBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoneInputBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoneInputBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
