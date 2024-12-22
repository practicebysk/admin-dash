import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  plainForm: FormGroup;
  complaintForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createPlainForm();
    this.createComplaintForm();
  }

  createPlainForm() {
    this.plainForm = this.fb.group({
      subject: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      to: ['', Validators.required],
    });
  }

  createComplaintForm() {
    this.plainForm = this.fb.group({
      complaint: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      to: ['', Validators.required],
    });
  }
}
