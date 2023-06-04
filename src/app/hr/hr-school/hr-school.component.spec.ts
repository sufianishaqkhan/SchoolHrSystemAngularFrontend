import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrSchoolComponent } from './hr-school.component';

describe('HrSchoolComponent', () => {
  let component: HrSchoolComponent;
  let fixture: ComponentFixture<HrSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrSchoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
