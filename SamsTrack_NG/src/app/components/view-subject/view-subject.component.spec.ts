import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubjectComponent } from './view-subject.component';

describe('ViewSubjectComponent', () => {
  let component: ViewSubjectComponent;
  let fixture: ComponentFixture<ViewSubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSubjectComponent]
    });
    fixture = TestBed.createComponent(ViewSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
