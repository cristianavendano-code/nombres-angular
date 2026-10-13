import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ASaucedo } from './a-saucedo';

describe('ASaucedo', () => {
  let component: ASaucedo;
  let fixture: ComponentFixture<ASaucedo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ASaucedo],
    }).compileComponents();

    fixture = TestBed.createComponent(ASaucedo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
