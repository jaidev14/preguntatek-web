import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntatekComponent } from './preguntatek.component';

describe('PreguntatekComponent', () => {
  let component: PreguntatekComponent;
  let fixture: ComponentFixture<PreguntatekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreguntatekComponent]
    });
    fixture = TestBed.createComponent(PreguntatekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
