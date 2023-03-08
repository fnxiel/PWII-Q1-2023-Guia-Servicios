import { Component } from '@angular/core';
import { IMensaje } from './interfaces/IMensaje';
import { mensajeInformacion, mensajeAdvertencia, mensajeError } from './MensajesNotificaciones';
import { INotificacion } from './interfaces/INotificacion';
import { NotificacionesService } from './notificaciones.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'guia-q1-2023-servicios';

  mensajeInformacion = mensajeInformacion
  mensajeAdvertencia =mensajeAdvertencia
  mensajeError = mensajeError 

  constructor(public servicioNotificaciones: NotificacionesService){

  }

  crearNuevaNotificacion(titulo: string, mensaje: string, tipoNotificacion: "error" | "advertencia" | "informacion"){
    const notificacionNueva: INotificacion = {
      titulo: titulo,
      mensaje: mensaje,
      tipoNotificacion: tipoNotificacion,
      fechaHora: new Date()
    }
    this.servicioNotificaciones.notificar(notificacionNueva)
  }

  limpiarMensajes(){
    this.servicioNotificaciones.limpiarNotificaciones()
  }
}
