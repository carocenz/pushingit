describe("Desafío 1", () => {
  const numero = Math.floor(Math.random() * 1000); // variable 1
  const text = "Hacer el Desafío n°1."; //variable 2
  it("Actividad https://codeshare.i https://pushing-front.vercel.appo/MND8bq desafio 1", () => {
    cy.visit("https://pushing-front.vercel.app/");
    cy.get("input[id='user']").type(`pushingit${numero}`);
    cy.get("input[id='pass']").type("123456!");
    cy.get("input[value = 'Female']").check({ force: true });
    cy.get("select[id='day']").select("20"); //valor real
    cy.get("select[id='month']").select("3"); //posición array
    cy.get("select[id='year']").select("1992"); // texto visible
    cy.get("button").contains("Register").click(); // también se logra con cy.get("button[id='submitForm']").click();
    cy.get("a[id='todolistlink']").click();
    cy.get("input[id='task']").type(text); // también se logra con: cy.get("input[id='task']").type(`${text}{enter}`); y eliminando la siguiente línea: cy.get("button[id='sendTask']").click();
    cy.get("button[id='sendTask']").click();
    cy.get("p").contains(text).click();
  });
});
