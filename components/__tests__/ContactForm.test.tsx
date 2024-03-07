import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import '@testing-library/jest-dom'

import ContactForm from '../ContactForm'

function setup(component: React.ReactNode) {
  return {
    user: userEvent.setup(),
    ...render(component),
  }
}

describe('ContactForm', () => {
  it('allows typing in name input', async () => {
    const { user } = setup(<ContactForm />)

    const nameInput = screen.getByRole('textbox', { name: /name/i })

    await user.type(nameInput, 'Naveen Yadav')

    expect(nameInput).toHaveValue('Naveen Yadav')
  })
})
