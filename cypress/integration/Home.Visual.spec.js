// ['iphone-6', 'landscape'], 'iphone-6', 'ipad-2', ['ipad-2', 'landscape'], [1920, 1080]

const sizes = [[1920, 1080]];

describe("Home Page Visual Tests", function () {
  before(() => {
    cy.visit("http://localhost:3000/pt");
  });

  sizes.forEach((size) => {
    it(`Should match ${size} image snapshot`, function () {
      cy.get("header").invoke("css", "position", "absolute");

      cy.get('[data-cy=gdpr-button]').click()

      cy.matchImageSnapshot(`Homepage-Visual-Test-${size}`, {
        capture: "fullPage",
      });
    });
  });
});
