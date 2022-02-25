import { getSaludo } from "../../base/02-template-string.js";

describe("Pruebas en 02-template-string.js", () => {
  test("getSaludo debe retornar Hola Fernando", () => {
    const nombre = "Fernando";

    const saludo = getSaludo(nombre);

    expect(saludo).toBe("Hola " + nombre + "!");
  });

  test("getSaludo debe retornar hola Carlos, si no hay argumento nombre", () => {
    const saludo = getSaludo();

    expect(saludo).toBe("Hola Carlos!");
  });
});
