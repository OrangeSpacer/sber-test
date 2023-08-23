describe("template spec", () => {
	it("passes", () => {
		cy.visit("http://127.0.0.1:5173/");
	});
	it("sushi type work", () => {
		cy.visit("http://127.0.0.1:5173/");
		cy.get('[data-testid="foodCard"]').should("have.length", 4);
		cy.get('[data-testid="checkBox"]').first().click();
		cy.get('[data-testid="foodCard"]').should("have.length", 2);
		cy.get('[data-testid="checkBox"]').first().click();
		cy.get('[data-testid="foodCard"]').should("have.length", 4);
	});
	it("pizza type work", () => {
		cy.visit("http://127.0.0.1:5173/");
		cy.get('[data-testid="foodCard"]').should("have.length", 4);
		cy.get('[data-testid="checkBox"]').eq(1).click();
		cy.get('[data-testid="foodCard"]').should("have.length", 1);
		cy.get('[data-testid="checkBox"]').eq(1).click();
		cy.get('[data-testid="foodCard"]').should("have.length", 4);
	});
	it("pizza type work", () => {
		cy.visit("http://127.0.0.1:5173/");
		cy.get('[data-testid="foodCard"]').should("have.length", 4);
		cy.get('[data-testid="checkBox"]').eq(2).click();
		cy.get('[data-testid="foodCard"]').should("have.length", 1);
		cy.get('[data-testid="checkBox"]').eq(2).click();
		cy.get('[data-testid="foodCard"]').should("have.length", 4);
	});
	it("should sorted for date", () => {
		cy.visit("http://127.0.0.1:5173/");
		cy.get('[data-testid="date"]').first().should("have.text", "13.04.2023");
		cy.get("input").first().click();
		cy.contains("сначала старые").click();
		cy.get('[data-testid="date"]').first().should("have.text", "10.04.2023");
	});
});
