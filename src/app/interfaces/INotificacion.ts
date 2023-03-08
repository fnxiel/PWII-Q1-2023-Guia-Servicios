export interface INotificacion{
    titulo: string
    mensaje: string
    tipoNotificacion: "error" | "advertencia" | "informacion"
    fechaHora: Date
}