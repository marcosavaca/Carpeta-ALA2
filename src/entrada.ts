import { createInterface } from "node:readline/promises";
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
export async function pedirNumero(mensaje: string, min?: number, max?: number): Promise<number> {
    while (true) 
    {
        const entrada = (await rl.question(mensaje)).trim();
        const numero = Number(entrada);

        // Si no se pasa rango como argumento entonces es el menu.
        if (min === undefined || max === undefined) 
        {
            return numero;
        }
        // Si me pasaron rango -> valido y reintento hasta que sea correct "" con Number es 0, por eso se pide !==""
        if (entrada !== "" && !isNaN(numero) && numero >= min && numero <= max) 
        {
            return numero;
        }
        console.log(`Ingrese un numero entre ${min} y ${max}.\n`);
    }
}
export async function pausa(mensaje: string): Promise<void> 
{
    await rl.question(mensaje);
}
export function cerrar(): void 
    {
     rl.close();
    }