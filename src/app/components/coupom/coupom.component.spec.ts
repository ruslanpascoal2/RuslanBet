import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupomComponent } from './coupom.component';

describe('CoupomComponent', () => {
  let component: CoupomComponent;
  let fixture: ComponentFixture<CoupomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoupomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoupomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
