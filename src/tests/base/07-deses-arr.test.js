import { retornaArreglo } from "../../base/07-deses-arr.js";

describe("Pruebas en desestructuracion", () => {
  test("debe de retornar un string y un numero", () => {
    const [letras, numeros] = retornaArreglo(); //["ABC", 123];
    // expect(letras).toEqual(["ABC", 123]);
    // expect(letras).toBe("ABC");
    expect(letras).toBe("ABC");
    expect(typeof letras).toBe("string");

    expect(numeros).toBe(123);
    expect(typeof numeros).toBe("number");
  });
});
