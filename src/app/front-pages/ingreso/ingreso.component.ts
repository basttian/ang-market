import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AsyncValidatorFn } from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

ingresoForm: FormGroup = new FormGroup({});

restorePassForm: FormGroup = new FormGroup({
  restoreInputPass: new FormControl('',[Validators.email,Validators.required])
})

  constructor(private fb: FormBuilder, public authService:AuthService) { 

    this.ingresoForm = fb.group({
      userEmail:['', [Validators.email,Validators.required]],
      password: ['', [Validators.required]],
    })

    this.ingresoForm.setValue({
      userEmail: '',
      password: ''
    });

    this.restorePassForm.setValue({
      restoreInputPass: '',
    });

  }

  ngOnInit(): void {
  }

}
