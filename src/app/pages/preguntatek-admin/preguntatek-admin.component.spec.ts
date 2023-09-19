import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntatekAdmin } from './preguntatek-admin.component';

describe('PreguntatekAdmin', () => {
  let component: PreguntatekAdmin;
  let fixture: ComponentFixture<PreguntatekAdmin>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreguntatekAdmin]
    });
    fixture = TestBed.createComponent(PreguntatekAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
