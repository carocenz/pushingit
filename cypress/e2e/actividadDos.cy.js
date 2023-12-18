describe("Actividad complementaria 2", () => {
  //Modificar todos los elementos web para que el test haga lo mismo pero encontrando los
  //elementos web de una manera diferente

  it("Registrarse en pushing it", () => {
    const numeroRandom = Math.floor(Math.random() * 1000);
    cy.visit("");
    cy.get("input[id='user']").type(`pushingiT${numeroRandom}`);
    cy.get("input[id='pass']").type("123456!");
    cy.get('input[value="Male"]').check({ force: true });
    cy.get("select[id='day']").select("4"); //value 4
    cy.get("select[id='month']").select("October"); //texto visible October
    cy.get("select[id='year']").select(10); //posicion del array numero 10
    cy.get("button[id='submitForm']").click();
  });
});
