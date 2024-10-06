describe("testing auto complete", () => {
    beforeEach(() => {
      cy.visit("/"); // Visit the page where your autocomplete component is located
    });
  
    it("testing tags on initial render", () => {
      cy.get("ul").should("exist"); // Check if the <ul> element exists on initial render
    });
  
    it("testing with valid data", () => {
      cy.get("input").type("a"); // Type in the input to trigger suggestions
      cy.get("ul li").should("have.length.greaterThan", 0); // Check if suggestions are displayed
    });
  
    it("testing with invalid data", () => {
      cy.get("input").type("invalid"); // Type an invalid input
      cy.get("ul").should("not.exist"); // Check if no suggestions are displayed
    });
  });
  