import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OCastillo } from './o-castillo';

describe('OCastillo', () => {
  let component: OCastillo;
  let fixture: ComponentFixture<OCastillo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OCastillo],
    }).compileComponents();

    fixture = TestBed.createComponent(OCastillo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
