import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ACandia } from './a-candia';

describe('ACandia', () => {
  let component: ACandia;
  let fixture: ComponentFixture<ACandia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ACandia],
    }).compileComponents();

    fixture = TestBed.createComponent(ACandia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
