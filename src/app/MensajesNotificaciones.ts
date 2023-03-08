import { IMensaje } from "./interfaces/IMensaje"

export const mensajeError: IMensaje = {
    tipo: "error",
    descripcion: "Ocurrió un error en la aplicacion" 
}
export const mensajeInformacion: IMensaje = {
  tipo: "informacion",
  descripcion: "Esta aplicación se encuentra funcionando" 
}
export const mensajeAdvertencia: IMensaje = {
  tipo: "advertencia",
  descripcion: "Esta aplicación se encuentra funcionando con advertencias" 
}