import { Component, OnInit } from '@angular/core';
import { INotificacion } from '../interfaces/INotificacion';
import { NotificacionesService } from '../notificaciones.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public servicioNotificaciones: NotificacionesService) { }

  ngOnInit(): void {
  }
  notificar(){
    const notificacionNueva: INotificacion = {
      titulo: "Usuario ingresó al sistema",
      mensaje: "Usuario autenticado, bienvenido",
      tipoNotificacion: "informacion",
      fechaHora: new Date()
    }
    this.servicioNotificaciones.notificar(notificacionNueva)
  }

}
