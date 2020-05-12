import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validationForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.validationForm = fb.group({
      emailFormEx: [null, [Validators.required, Validators.email]],
      passwordFormEx: [null, Validators.required],
    });
  }
  ngOnInit(): void {
  }

  get emailFormEx() { return this.validationForm.get('emailFormEx'); }
  get passwordFormEx() { return this.validationForm.get('passwordFormEx'); }
}
