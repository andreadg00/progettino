import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carriera } from './carriera';

describe('Carriera', () => {
  let component: Carriera;
  let fixture: ComponentFixture<Carriera>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carriera]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carriera);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
