import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lodging } from './lodging';

describe('Lodging', () => {
  let component: Lodging;
  let fixture: ComponentFixture<Lodging>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lodging],
    }).compileComponents();

    fixture = TestBed.createComponent(Lodging);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
