export type Tarea = {
    titulo: string;
    descripcion: string | null;
    estado: string;
    fechaCreacion: Date | null;
    ultimaEdicion: Date | null;
    fechaVencimiento: Date | null;
    dificultad: number;
};