import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UeberunsComponent } from './ueberuns.component';

describe('UeberunsComponent', () => {
  let component: UeberunsComponent;
  let fixture: ComponentFixture<UeberunsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UeberunsComponent]
    });
    fixture = TestBed.createComponent(UeberunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
