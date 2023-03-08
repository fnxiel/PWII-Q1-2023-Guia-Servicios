import { Injectable } from '@angular/core';
import { INotificacion } from './interfaces/INotificacion';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {
  notificaciones: INotificacion[] = []
  constructor() { }

  notificar(notificacion: INotificacion){
    this.notificaciones.push(notificacion)
    console.log("Se esta agregando una nueva notificacion")
    console.log(this.notificaciones)
  }

  limpiarNotificaciones(){
    this.notificaciones = []
    console.log("Se limpiaron todos los mensajes")
    console.log(this.notificaciones)
  }
}
