import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Prueba en 11-async-await", () => {

    test('getImage debe de retornar un error si no encontró una imagen', async () => {
      
        const url = await getImagen();
        console.log(url);
        expect(url).toBe("No se encontró la imagen");

    })
    

});