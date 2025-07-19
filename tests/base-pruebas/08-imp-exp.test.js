import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe("pruebas en 08-imp-exp", () => {

    test('getHeroeById debe retornar héroe por Id', () => {
      
        const id = 1;
        const heroe = getHeroeById(id);
        
        expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

    });
    
    test('getHeroeById debe retornar undefined si no existe', () => {
      
        const id = 100;
        const heroe = getHeroeById(id);
        
        expect(heroe).toEqual(undefined);
        expect(heroe).toBeFalsy();
    });

    // si es DC debe d devolver 3 elementos, marvel 2 elementos
    test('getHeroesByOwner debe retornar heroe por propietario', () => {
      
        const name = "DC";
        const heroe = getHeroesByOwner(name);
        
        expect(heroe).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);
        expect(3).toBe(heroe.length);
        expect(heroe).toEqual(heroes.filter((hero) => hero.owner === name));
    
    });

    test('getHeroesByOwner debe retornar heroe por propietario', () => {
      
        const name = "Marvel";
        const heroe = getHeroesByOwner(name);
        
        expect(2).toBe(heroe.length);

        console.log(heroe.length);        
    });

});