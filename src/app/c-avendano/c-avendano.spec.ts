import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CAvendano } from './c-avendano';

describe('CAvendano', () => {
  let component: CAvendano;
  let fixture: ComponentFixture<CAvendano>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CAvendano],
    }).compileComponents();

    fixture = TestBed.createComponent(CAvendano);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
