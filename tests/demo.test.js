
describe('Pruebas en <DemoComponent>', () => {

    test('Esta prueba no debe de fallar', () => {
        // 1 Inicializacion
        const message1 = 'Hola Mundo';

        // 2 estimulo
        const message2 = message1.trim();

        // 3 Observar el comportamiento esperadp
        expect(message1).toBe(message2);

    });


});


