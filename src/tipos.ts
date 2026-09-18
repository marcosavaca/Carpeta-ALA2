export type Tarea = {
    titulo: string;
    descripcion: string;
    estado: String | "P";
    fechaCreacion: Date | null;
    ultimaEdicion: Date | null;
    fechaVencimiento: string;
    dificultad: number | 1;
};