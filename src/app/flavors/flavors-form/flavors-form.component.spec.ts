import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlavorsFormComponent } from './flavors-form.component';

describe('FlavorsFormComponent', () => {
  let component: FlavorsFormComponent;
  let fixture: ComponentFixture<FlavorsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlavorsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlavorsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
