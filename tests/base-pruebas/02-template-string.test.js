import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string', () => {

    test('getSaludo debe de retornar "Hola illika', () => {
        const name = "illika";
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`);
    })

});