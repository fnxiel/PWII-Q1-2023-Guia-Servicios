import { Component, OnInit } from '@angular/core';
import { INotificacion } from '../interfaces/INotificacion';
import { NotificacionesService } from '../notificaciones.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor(public servicioNotificaciones: NotificacionesService) { }

  ngOnInit(): void {
  }

  notificar(){
    const notificacionNueva: INotificacion = {
      titulo: "Notificando al administrador",
      mensaje: "Algo ocurrio en la aplicacion",
      tipoNotificacion: "error",
      fechaHora: new Date()
    }
    this.servicioNotificaciones.notificar(notificacionNueva)
  }
}
