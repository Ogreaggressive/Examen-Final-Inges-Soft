describe("twitter", () => {
  it("Shows you can tweet", () => {
    cy.visit("/");
    cy.get("#cadena").type("que tal");
  });
  it("Shows you can click button", () => {
    cy.visit("/");
    cy.get("#addButton").click();
  });
  it("Shows list", () => {
    cy.visit("/");
    cy.get("#cadena").type("que tal");
    cy.get("#addButton").click();
    cy.get("#resultado").should('have.value',"que tal")
  });
});
