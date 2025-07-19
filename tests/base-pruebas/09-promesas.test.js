import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Prueba en 09-promesas', () => {

    test('getHeroByIdAsync debe de retornar un Heroe', (done) => {      
        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                done();
            })
    });

    test('getHeroByIdAsync debe de obtener un error si heore no existe', () => {      
        const id = 100;
        return getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe("No se pudo encontrar el héroe");
                
            });
    });
    

});