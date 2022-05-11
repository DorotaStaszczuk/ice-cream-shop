import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlavorsListComponent } from './flavors-list.component';

describe('FlavorsListComponent', () => {
  let component: FlavorsListComponent;
  let fixture: ComponentFixture<FlavorsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlavorsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlavorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
