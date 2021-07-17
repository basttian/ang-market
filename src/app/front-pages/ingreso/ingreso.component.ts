import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AsyncValidatorFn } from '@angular/forms';


@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

ingresoForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { 

    this.ingresoForm = fb.group({
      userEmail:['', [Validators.email,Validators.required]],
      password: ['', [Validators.required]],
    })

    this.ingresoForm.setValue({
      userEmail: '',
      password: ''
    });

  }

  ngOnInit(): void {
  }

}
