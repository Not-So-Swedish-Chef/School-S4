import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavClusterPage } from './nav-cluster.page';

describe('NavClusterPage', () => {
  let component: NavClusterPage;
  let fixture: ComponentFixture<NavClusterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NavClusterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
