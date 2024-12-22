import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommercComponent } from './ecommerc.component';

describe('EcommercComponent', () => {
  let component: EcommercComponent;
  let fixture: ComponentFixture<EcommercComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommercComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcommercComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
