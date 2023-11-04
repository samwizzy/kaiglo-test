import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../utils/services/todo.service';
import { Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-expo',
  templateUrl: './expo.component.html',
  styleUrls: ['./expo.component.scss'],
})
export class ExpoComponent implements OnInit {
  form!: FormGroup;
  todos: Observable<any> = this.todoService.getData().pipe(shareReplay(1));

  tasks: any = [];

  constructor(private fb: FormBuilder, private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTasks();

    this.form = this.fb.group({
      userDetails: this.fb.group({
        firstname: this.fb.control('', {
          validators: Validators.required,
          updateOn: 'blur',
        }),
        lastname: [''],
        email: [''],
      }),
      address: this.fb.group({
        number: [''],
        street: [''],
        state: [''],
        country: [''],
      }),
      contacts: this.fb.array([]),
    });
  }

  get getContacts() {
    return this.form.get('contacts') as FormArray;
  }

  addContactForm() {
    this.getContacts.push(
      this.fb.group({
        name: [],
      })
    );
  }

  getTasks() {
    this.todoService.getData().subscribe((data) => (this.tasks = data));
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
