import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CompanyDTO } from 'src/app/models/company.model';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
  selected: any;
  companyForm: FormGroup;
  companyArray: any[] = [];
  dataCom: CompanyDTO = new CompanyDTO('', '', '', '', '', '', '', '');
  constructor(private fb: FormBuilder, private snack_bar: MatSnackBar) {}

  ngOnInit(): void {
    this.createCompanyForm();
  }

  createCompanyForm() {
    this.companyForm = this.fb.group({
      company: ['', Validators.required],
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      adress: ['', Validators.required],
      date: ['', Validators.required],
      gender: ['', Validators.required],
      size: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    this.dataCom = this.companyForm.value;
    this.companyArray.push(this.dataCom);

    this.openSnackBar('Form submited');
  }

  openSnackBar(message: string) {
    this.snack_bar.open(message);
  }
}
