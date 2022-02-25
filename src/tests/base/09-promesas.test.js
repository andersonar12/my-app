import { getHeroeByIdAsync } from "../../base/09-promesas.js";
import heroes from "../../data/heroes.js";

describe("Pruebas con Promesas", () => {
  test("getHeroeByIdAsync debe retornar un heroe async", (done) => {
    getHeroeByIdAsync(1).then((heroe) => {
      expect(heroe).toBe(heroes[0]);
      done();
    });
  });

  test("debe obtener un error si el heroe por id no existe", (done) => {
    getHeroeByIdAsync(10).catch((error) => {
      expect(error).toBe("No se pudo encontrar el héroe");
      done();
    });
  });
});
