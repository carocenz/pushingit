describe("Mocha", () => {
  const alumno = "Juan";
  it.only("Primer test con Mocha", () => {
    cy.log("Primer test con Mocha" + alumno);
  });

  it.skip("Segundo test con Mocha", () => {
    cy.log("Segundo test con Mocha" + alumno);
  });
});

it("Test fuera de la suite de pruebas", () => {
  cy.log("Fuera de la suite de pruebas" + alumno);
});

describe("Mocha", () => {
  const alumno = "Lara";
  it.only("Tercer test con Mocha", () => {
    cy.log("Tercer test con Mocha" + alumno);
  });

  it.skip("Cuarto test con Mocha", () => {
    cy.log("Cuarto test con Mocha" + alumno);
  });
});

it("Test fuera de la suite de pruebas", () => {
  cy.log("Fuera de la suite de pruebas" + alumno);
});
