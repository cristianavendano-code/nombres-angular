import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ELeyva } from './e-leyva';

describe('ELeyva', () => {
  let component: ELeyva;
  let fixture: ComponentFixture<ELeyva>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ELeyva],
    }).compileComponents();

    fixture = TestBed.createComponent(ELeyva);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
