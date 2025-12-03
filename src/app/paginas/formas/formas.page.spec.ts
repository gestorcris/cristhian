import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FORMASPage } from './formas.page';

describe('FORMASPage', () => {
  let component: FORMASPage;
  let fixture: ComponentFixture<FORMASPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FORMASPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
