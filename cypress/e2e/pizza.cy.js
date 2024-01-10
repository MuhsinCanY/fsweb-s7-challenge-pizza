describe('home test', () => {
  it('passes', () => {
    cy.visit('/')
  })

  it('Acıktım buttonuna tıkla', () => {
    //arrange
    cy.visit('/')
    //act
    cy.get("[data-cy='home-btn']").click()
    //assert
    cy.url().should('eq', 'http://localhost:3000/pizza')
  })
})

describe('MVP tests', () => {
  it('İsim alanını kullan', () => {
    //arrange
    cy.visit('/')
    //act
    cy.get("[data-cy='home-btn']").click()
    cy.get("[id='name-input']").type('Buraya isim yazılacak')
    //assert
  })

  it('Materyal seç', () => {
    //arrange
    cy.visit('/')
    //act
    cy.get("[data-cy='home-btn']").click()

    cy.get('[type="checkbox"]').eq(0).check()
    cy.get('[type="checkbox"]').eq(2).check()
    cy.get('[type="checkbox"]').eq(5).check()
    cy.get('[type="checkbox"]').eq(7).check()
    cy.get('[type="checkbox"]').eq(9).check()

    //assert
  })

  it('e2e', () => {
    //arrange
    cy.visit('/')
    //act
    cy.get("[data-cy='home-btn']").click()

    //size
    cy.get("[type='radio']").eq(1).check()

    //paste
    cy.get('[name="paste"]').select(['Normal'])

    //materials
    cy.get('[type="checkbox"]').eq(0).check()
    cy.get('[type="checkbox"]').eq(2).check()
    cy.get('[type="checkbox"]').eq(5).check()
    cy.get('[type="checkbox"]').eq(7).check()
    cy.get('[type="checkbox"]').eq(9).check()

    //name
    cy.get("[id='name-input']").type('Danilo')

    //note
    cy.get("[name='note']").type('Pizza sosu istiyorum.')

    //count
    cy.get("[name = 'plus']").click()
    cy.get("[name = 'plus']").click()
    cy.get("[name = 'minus']").click()

    cy.get("[id = 'order-button']").click()

    //assert
  })
})
