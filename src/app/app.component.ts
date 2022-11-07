import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { REVIEW_WITHDRAWAL } from 'src/const/review-withdrawal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // requestForm: FormGroup;

  // constructor(private fb: FormBuilder) {
  // }

  // ngOnInit(): void {
  //   this.createForm();
  // }

  // onChange(event: any) { 
  //   console.log(this.requestForm.value); 
  // }

  // onclickbutton(event: any) {
  //   console.log(this.observationControl);
  //   console.log(this.requestForm.value);
  //   console.log(event);
  // }

  // get observationControl() {
  //   return this.requestForm.get('idNombre') as FormControl;
  // }

  // createForm() {
  //   this.requestForm = this.fb.group({
  //     idNombre: ['', [Validators.required]],
  //     idApellido: ['', [Validators.required]],
  //     idCorreo: ['', [Validators.required]],
  //   });
  // }
  withdrawalForm: FormGroup;
  labels = REVIEW_WITHDRAWAL;
  stateInput = 'disabled';
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  get observationControl() {
    return this.withdrawalForm.get('observations') as FormControl;
  }

  createForm() {
    this.withdrawalForm = this.fb.group({
      withdrawalValue: ['', [Validators.required]],
      observations: ['', [ Validators.max(200)]],
    });
  }

  resetForm(){
    this.withdrawalForm.reset();
  }

  saveRequest(state: string) {
    console.log(this.withdrawalForm);
    this.resetForm();
  }

  handleErrorInput() {
    return '';
  }
}
