import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AsyncValidatorFn } from '@angular/forms';

import { ConfirmedValidator } from '../../confirmed.validator';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {

registerForm: FormGroup = new FormGroup({});

  passmsg: string | undefined;

  constructor(private fb: FormBuilder) {

      this.registerForm = fb.group({
      userEmail:['', [Validators.email,Validators.required]],
      password: ['', [Validators.required]],
      confPass: ['', [Validators.required]]
    }, { 
      validator: ConfirmedValidator('password','confPass')
    })

    this.registerForm.setValue({
      userEmail: '',
      password: '',
      confPass: ''
    });
  }

  ngOnInit(): void {}

  checkPassSame():boolean {
    let pass = this.registerForm.value.password;
    let passConf = this.registerForm.value.confPass;
    if(pass === passConf && pass !== '' ) {
      this.passmsg = "";
      return false;
    }else {
      this.passmsg = "La contraseña no coincidió.";
      return true;
    }
  }

}


