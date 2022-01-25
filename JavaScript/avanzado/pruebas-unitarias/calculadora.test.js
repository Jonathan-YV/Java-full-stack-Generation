/* 
    Importar los módulos 
    si sale una importación extra, hay que borrarla 
    se debe encerrar la función entre llaves
*/
const { sumar, restar, multiplicar, dividir } = require('./calculadora');

/* Esto sólo es una descripción, si encuentra errores, no te dice dónde está */
describe('Pruebas en el componente calculadora', () => {
    /* Hacer una prueba */
    test('Prueba en la función sumar', () => {
        /* resultado esperado */
        expect(sumar(3, 5)).toBe(8);
    });

    test('Prueba en la función restar', () => {
        /* resultado esperado */
        expect(restar(5, 2)).toBe(3);
    });

    test('Prueba en la función multiplicar', () => {
        /* resultado esperado */
        expect(multiplicar(5, 2)).toBe(10);
    });

    test('Prueba en la función dividir', () => {
        /* resultado esperado */
        expect(dividir(6, 3)).toBe(2);
    });
})


/* 
    se corre con 
    npm run test
*/