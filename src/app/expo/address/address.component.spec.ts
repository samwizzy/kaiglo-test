import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressComponent } from './address.component';
import { FormControl, FormGroupDirective } from '@angular/forms';

describe('AddressComponent', () => {
  let component: AddressComponent;
  let fixture: ComponentFixture<AddressComponent>;
  let formGroupDirective: FormGroupDirective;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        { provide: FormGroupDirective, useValue: formGroupDirective },
      ],
      declarations: [AddressComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddressComponent);
    component = fixture.componentInstance;
    formGroupDirective = new FormGroupDirective([], []);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
