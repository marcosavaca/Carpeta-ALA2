import type { Tarea } from "./tipos.ts";

export function control(listaDeTareas: Tarea[]): boolean {
    if (listaDeTareas.length === 0) 
    {
        console.log("Todavia no has creado tareas  \n");
        return true;
    }
    return false;
}
export  function esvacio(valor: string| Date | null): boolean
    {
        if(valor===null || valor===undefined)
        {
         return true;
        }
        if (valor instanceof Date)  //un fecha no se deja vacia y por default se poone la fecha de creacion.
        {  
            return false
        }
        if(typeof valor === "string")
        {
            return valor.trim() === "";  // si es un string y espacio en blanco entonces es vacio.
        }
        // si no cumple que sea nulo o stirng y espacio en blanco entonces es falso.
        return false;
    }
export function resolverEdicion(entrada: string, valorAnterior:string):string
    {
      // mantener
        if (entrada === "")
        { 
        return valorAnterior;
        }
        //vaciar:
        if (entrada.trim() === ""){
        return "";
        }          
        return entrada;// valor nuevo
    }