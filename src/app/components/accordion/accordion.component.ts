import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {
  colorForm!: FormGroup;
  rows = [
    { title: 'Title', body: 'lorem' },
    { title: 'Title 2', body: 'lorem is the world' },
  ];

  constructor(private fb: FormBuilder) {}

  createColorForm() {
    this.colorForm = this.fb.group({
      color: [null, Validators.required],
      productPriceDetails: this.fb.group({
        quantity: ["", [Validators.required, Validators.pattern(/^[0-9]+$/)]],
        price: ["", [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      }),
    });
  }
}
