import {rl} from "./entrada.ts"
import {verDetalleTarea} from "./operaciones.ts";
import type { Tarea } from "./tipos.ts";
import {esvacio} from "./validaciones.ts";


export async function imprimirtarea(listaDeTareas: Tarea[],condicion: string | null,buscar:string | null): Promise<void>
    {
        const tareasFiltradas = [];

        for (let i=0; i<listaDeTareas.length; i++) 
        {
            if(buscar) //Si estamos buscando entonces en la variable buscar se tiene el titulo de la tarea a buscar.
            {
              if(listaDeTareas[i].titulo.toLowerCase().includes(buscar.toLowerCase())) 
                {
                    //añadimos a la tarea filtrada.
                 tareasFiltradas.push(listaDeTareas[i]);
                }
            } 
            else 
            {
                // Si no estamso buscando y estamos viendo todas las tareas ya sea todas(null),Pendiente,En curso, Finalizadas:
              if(listaDeTareas[i].estado===condicion || condicion===null) 
                {
                    //añadimso todas las tareas solo que cumpla la condicion o todas.
                    tareasFiltradas.push(listaDeTareas[i]);
                }
            }
        }
        if(tareasFiltradas.length===0) 
        {
         console.log("No hay tareas relacionadas a la busqueda\n");
            return;
        }
        //Si es buscar o imprimir todas las tareas o por condicion cambia el mensaje:
        if(buscar) 
        {
         console.log("Estas son las tareas relacionadas!: \n");
        } 
        else 
        {
         console.log("Estas son todas tus tareas!: \n");
        }

        for (let i=0;i<tareasFiltradas.length;i++) 
        {
            if(listaDeTareas[i] && tareasFiltradas[i].titulo)
            {
            console.log(`${[i+ 1]} ${tareasFiltradas[i].titulo} \n`);
            }
        }

        console.log("¿Deseas ver los detalles de alguna? \n");
        console.log("Introduce el numero de la tarea o 0 para volver \n");
        const entrada = (await rl.question("> ")).trim();
        const indice = Number(entrada);
        if (indice===0 || isNaN(indice) || indice>tareasFiltradas.length) 
        {
         return; //isNaN es true si no es numero auqnue parezca lo contrario. isNaN= Is not a number.
        }
    
        await verDetalleTarea(tareasFiltradas, indice);
    }


export function mostrarCampo(mensaje: string,valor:string | Date| null )
    {
        if(esvacio(valor))
        {
            console.log(`${mensaje}: Sin datos \n`);
            return;
        }
        else
        {
        console.log(`${mensaje}: ${valor} \n`);  
        }
    }