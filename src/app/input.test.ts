import 'jest-preset-angular/setup-jest';
describe("Test unitario desing system input", ()=>{
    test('Debe ...',()=>{
        // ARRANQUE
        // const primerValor = 10;
        // const segundoValor = 20;
        const expectedResultado = 30;
        let resultado:number;
        // // ACT: traer lo que me hace la función
        resultado=30;
        // // ASSERT: hipótesis
        expect(
            resultado
        ).toBe(expectedResultado);
    })
})