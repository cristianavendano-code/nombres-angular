import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BArreola } from './b-arreola';

describe('BArreola', () => {
  let component: BArreola;
  let fixture: ComponentFixture<BArreola>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BArreola],
    }).compileComponents();

    fixture = TestBed.createComponent(BArreola);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
