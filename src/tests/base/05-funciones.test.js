import { getUser, getUsuarioActivo } from "../../base/05-funciones.js";

describe("Pruebas en 05-funciones.js", () => {
  test("getUser debe retornar un objeto", () => {
    const useTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();
    // console.log(user);
    expect(user).toEqual(useTest);
  });

  test("getUsuarioActivo debe de retornar un objeto", () => {
    const nombre = "Juan";
    const user = getUsuarioActivo(nombre);
    expect(user).toEqual({ uid: "ABC567", username: nombre });
  });
});
