import { createInterface } from "readline/promises";
export const rl = createInterface({ input: process.stdin, output: process.stdout });
export async function pedirDato(mensaje: string, opcionesValidas: string[] | null, obligatorio:boolean): Promise<string> 
    {
        while(true) 
        {
            let entrada = await rl.question(mensaje);
            if (opcionesValidas) 
            {
                entrada = entrada.toUpperCase();
                if (opcionesValidas.includes(entrada)) 
                {
                    return entrada;
                }
                console.log(`Opcion no valida. Ingresa: ${opcionesValidas.join(", ")}.\n`);
            } 
            else 
            {
             if (entrada.trim() !== "" || !obligatorio) 
                {
                  return entrada;
                }
                console.log("Este campo no puede estar vacío.\n");
            }
        }
    }
export async function pedirFecha(mensaje:string,editar:boolean | null):Promise<string>
    {
    while (true) 
        {
        const entrada = await rl.question(mensaje);
        if (entrada==="")
        { 
            return ""; // puede ser vacia, porque por defecto colocamos fecha creacion.
        }
        if (entrada.trim() === "" && editar) //espacio entonces vaciamos al editar 
        { 
         return " "; 
        } 
        const regex = /^\d{4}-\d{2}-\d{2}$/;


        if (regex.test(entrada)) 
        {
            return entrada;
        }
        console.log("Formato no valido. Usa el formato AAAA-MM-DD o presione Enter para omitir.\n");
        }
    }