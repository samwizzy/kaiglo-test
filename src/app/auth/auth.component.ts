import {
  GoogleLoginProvider,
  SocialAuthService,
} from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

interface IFormGroup {
  email: FormControl<string>;
  password: FormControl<string>;
  address: FormGroup<{ street: FormControl<string | null> }>;
  hobbies: FormArray<FormControl<unknown>>;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private socialAuthService: SocialAuthService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.nonNullable.group<IFormGroup>({
      email: this.fb.nonNullable.control(''),
      password: this.fb.nonNullable.control(''),
      address: this.fb.group({
        street: this.fb.control(''),
      }),
      hobbies: this.fb.nonNullable.array([]),
    });
  }

  ngOnInit(): void {
    this.patchValue();
  }

  patchValue() {
    const data = {
      email: '',
      password: '',
      address: {
        street: 'No 9 Adeniyi Jones',
      },
      hobbies: [
        { name: 'Watching movies' },
        { name: 'Playing Soccer' },
        { name: 'Video Games' },
      ],
    };

    const { hobbies, ...rest } = data;

    this.form.patchValue(rest);

    hobbies.forEach((hobbie) => {
      const fg = this.fb.group({
        name: this.fb.control(hobbie.name),
      });
      (this.form.get('hobbies') as FormArray).push(fg);
    });
  }

  async signInWithGoogle(): Promise<any> {
    await this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
}
