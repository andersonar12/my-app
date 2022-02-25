describe("Pruebas en el demo.test.js", () => {
  test("deben ser iguales los string", () => {
    //Inicializacion
    const mensaje = "Hola mundo";
    //Estimulo
    const mensaje2 = `Hola mundo`;
    //Observar el comportamiento
    expect(mensaje).toBe(mensaje2);
  });
});
