import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth/auth.service'

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css']
})
export class DesktopComponent implements OnInit {

  constructor(public usuario:AuthService) { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    return this.usuario.logout()
  }

}
