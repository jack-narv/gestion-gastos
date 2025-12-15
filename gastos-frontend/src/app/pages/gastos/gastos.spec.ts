import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gastos } from './gastos';

import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('Gastos', () => {
  let component: Gastos;
  let fixture: ComponentFixture<Gastos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gastos, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Gastos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });
});
