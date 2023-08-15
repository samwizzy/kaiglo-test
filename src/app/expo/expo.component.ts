import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-expo',
  templateUrl: './expo.component.html',
  styleUrls: ['./expo.component.scss'],
})
export class ExpoComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      details: this.fb.group({
        firstname: [''],
        lastname: [''],
        email: [''],
      }),
      address: this.fb.group({
        number: [''],
        street: [''],
        state: [''],
        country: [''],
      }),
    });
  }

  onSubmit() {}
}
