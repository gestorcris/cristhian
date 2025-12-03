import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PRECIOSPage } from './precios.page';

describe('PRECIOSPage', () => {
  let component: PRECIOSPage;
  let fixture: ComponentFixture<PRECIOSPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PRECIOSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
