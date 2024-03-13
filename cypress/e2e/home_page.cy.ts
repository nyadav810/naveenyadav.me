const AMPLIFY_CONSOLE_URL =
  'https://us-east-1.console.aws.amazon.com/amplify/home?region=us-east-1#/'

describe('The Home Page', () => {
  it('should load successfully', () => {
    cy.visit('/')

    cy.contains('Naveen Yadav')
  })

  it('should submit the contact form successfully', () => {
    cy.visit('/')

    cy.findByRole('textbox', { name: /name/i }).type('Naveen Yadav')
    cy.findByRole('textbox', { name: /e-mail/i }).type('n_yadav@comcast.net')
    cy.findByRole('textbox', { name: /message/i }).type(
      `This is a test message from Cypress! Find out if the tests passed: ${AMPLIFY_CONSOLE_URL}`
    )

    cy.findByRole('button').click()

    cy.contains('Thank you! Your message has been sent.')
  })
})
