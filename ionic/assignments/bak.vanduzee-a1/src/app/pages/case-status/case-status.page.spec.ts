import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaseStatusPage } from './case-status.page';

describe('CaseStatusPage', () => {
  let component: CaseStatusPage;
  let fixture: ComponentFixture<CaseStatusPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
