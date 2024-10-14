import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUserComponent } from './all-user.component';

describe('AllUserComponent', () => {
  let component: AllUserComponent;
  let fixture: ComponentFixture<AllUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllUserComponent]
    });
    fixture = TestBed.createComponent(AllUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
