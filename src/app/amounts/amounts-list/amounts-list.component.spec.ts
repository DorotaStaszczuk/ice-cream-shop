import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountsListComponent } from './amounts-list.component';

describe('AmountsListComponent', () => {
  let component: AmountsListComponent;
  let fixture: ComponentFixture<AmountsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
