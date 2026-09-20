import { pedirDato,pedirFecha,rl } from "./entrada.ts";
import type { Tarea } from "./tipos.ts";
import {control,resolverEdicion} from "./validaciones.ts"
import {imprimirtarea,mostrarCampo} from "./mostrar.ts";

export async function agregarTarea():Promise<Tarea> 
    {
        console.log("Estas creando una nueva tarea.\n");
        // Si tiene opciones validas y tambien es obligatorio entonces puede ser vacio.
        let titulous=await pedirDato( "1. Título:\n", null, true);
        let descripcionus= await pedirDato("2. Descripción:\n", null, false);
        //Los que no pueden ser vascios y tienen valores por defecto a opciones validas se les coloca "".
        let estadous=await pedirDato( "3. Estado ([P]endiente/[E]n curso/[T]erminada/[C]ancelada):\n", ["P", "E", "T", "C",""], true);
        let vencimiento = await pedirFecha("Ingrese fecha de vencimiento (AAAA-MM-DD) o presione Enter para omitir:\n",null);
        let dificultadus = await pedirDato( "4. Dificultad ([1]/[2]/[3]):\n", ["1", "2", "3",""],true);
        let fechaCreacionus = await pedirDato("¿Desea agregar fecha de creación? [S]í / [N]o:\n", ["S", "N"], true);
        let ultimaEdicionus = await pedirDato("¿Desea agregar última edición? [S]í / [N]o:\n", ["S", "N"], true);
         // Conclusión de fechas: Si eligió 'S', asigna Date(), de lo contrario null
          let ultimaEdicionFinal,fechaCreacionFinal;
        if(fechaCreacionus === "S")
        { 
          fechaCreacionFinal =new Date();

        } 
        else
        {
            fechaCreacionFinal=null;
        }
        if(ultimaEdicionus === "S")
        { 
          ultimaEdicionFinal =new Date()

        } 
        else
        {
            ultimaEdicionFinal=null;
        }
    
        let nuevaTarea = {
            titulo: titulous,
            descripcion:descripcionus,
            estado: estadous ||"P",
            fechaCreacion: fechaCreacionFinal,
            ultimaEdicion:ultimaEdicionFinal,
            fechaVencimiento: vencimiento,
            dificultad: Number(dificultadus) || 1
        };
        console.log("¡Datos guardados!.\n");
        await rl.question("Presione cualquier tecla para continuar... \n");

        return nuevaTarea;
    }



export async function verTareas(listaDeTareas: Tarea[]): Promise<void>
    {
        if (control(listaDeTareas))
        {
         return;
        }
        console.log("¿Que tareas deseas ver?:\n");
        console.log("[1] Todas \n");
        console.log("[2] Pendientes \n");
        console.log("[3] En curso \n");
        console.log("[4] Terminadas \n");
        console.log("[0] Volver \n");
        let opcion=Number(await rl.question(">"));
        if (opcion === 0)
        { 
        return;
        }

        switch(opcion)
        {
            case 1:
                await imprimirtarea(listaDeTareas,null,null);
                break;
            case 2:
                await imprimirtarea(listaDeTareas,"P",null);
                break;
            case 3:
                await imprimirtarea(listaDeTareas,"E",null);
                break;
            case 4:
                await imprimirtarea(listaDeTareas,"T",null);
                break;
                
            default:
                console.log("Ingrese una opcion valida \n");
                break;
        }
    }

export async function verDetalleTarea(listaDeTareas: Tarea[],indice: number): Promise<void>
    {
        if (!listaDeTareas[indice-1]) 
        {
            console.log("Tarea no encontrada.\n");
            return;
        }
        console.log("Esta es la tarea que elegiste: \n");
        console.log(`Titulo: ${listaDeTareas[indice-1].titulo} \n`);
        console.log(`Dificultad: ${listaDeTareas[indice-1].dificultad} \n`);
        mostrarCampo("Descripcion", listaDeTareas[indice-1].descripcion);
        console.log(`Estado: ${listaDeTareas[indice-1].estado} \n`);
        mostrarCampo("Fecha de creacion", listaDeTareas[indice-1].fechaCreacion);
        console.log(`Ultima edicion: ${listaDeTareas[indice-1].ultimaEdicion} \n`);
        mostrarCampo("Fecha de vencimiento", listaDeTareas[indice-1].fechaVencimiento);
        console.log("Si deseas editarla presione E o 0 para volver. \n");
        let entrada=await rl.question(">");
        while(entrada!="0" && entrada!="E" && entrada!="e")
        {
            entrada=await rl.question("Ingrese una opcion valida \n");
        }
        if(entrada==="0")
        {
         return; 
        }
        console.log(`Estas editando la tarea: ${listaDeTareas[indice-1].titulo}  \n`);
        console.log("-Si deseas mantener los valores de un atributo, simplemente dejalo en blanco (no espacio) \n");
        console.log("-Si deseas dejar en blanco un atributo, escribe un espacio. \n");
        // A los atributos que pueden sar vacios se les agrega a opciones validas un espacio: " ".
        const nuevaDescripcion= await pedirDato( "1. Descripción:\n", null, false);
        const nuevoEstado=await pedirDato( "3. Estado ([P]endiente/[E]n curso/[T]erminada/[C]ancelada) o dejalo en blanco para mantener(no espacio) \n", ["P", "E", "T", "C",""], true);
        const nuevaDificultad = await pedirDato( "3. Dificultad ([1]/[2]/[3]) o dejalo en blanco para mantener(no espacio) \n", ["1", "2", "3",""],true);
        const vencimiento=await pedirFecha("Ingrese fecha de vencimiento (AAAA-MM-DD)\n", true);
        //vaciableS:
        listaDeTareas[indice-1].descripcion= resolverEdicion(nuevaDescripcion,listaDeTareas[indice-1].descripcion);
        listaDeTareas[indice-1].fechaVencimiento = resolverEdicion(vencimiento,listaDeTareas[indice-1].fechaVencimiento);     
        // no vaciables:
        if (nuevoEstado !== "")
        {     
         listaDeTareas[indice-1].estado= nuevoEstado;

        }
        if (nuevaDificultad !== "")
        { 
        listaDeTareas[indice-1].dificultad = Number(nuevaDificultad);
        }
        listaDeTareas[indice-1].ultimaEdicion=new Date();
        console.log("¡Datos guardados!\n");
        await rl.question("Presiona cualquier tecla para continuar ...\n");
            
    }

export async function buscarTareas(listaDeTareas: Tarea[]): Promise<void>
    {
        if (control(listaDeTareas))
        {
         return;
        }
        let titulo= await rl.question("Ingrese el titulo de la tarea a buscar \n");
        // La condicion es null ya que no estamos imprimiendo todas las tareas o por condicion solo buscamos:
        await imprimirtarea(listaDeTareas,null,titulo);

    }