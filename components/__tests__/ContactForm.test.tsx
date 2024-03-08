import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import strings from 'app/en.json'

import '@testing-library/jest-dom'

import ContactForm from '../ContactForm'

function setup(component: React.ReactNode) {
  return {
    user: userEvent.setup(),
    ...render(component),
  }
}

const mockSubmit = jest.fn().mockResolvedValue({ message: 'Success' })
const mockSubmitWithRejection = jest.fn().mockRejectedValue(new Error('uh oh'))

const getNameInputElement = () => screen.getByRole('textbox', { name: /name/i })
const getEmailInputElement = () =>
  screen.getByRole('textbox', { name: /e-mail/i })
const getMessageTextareaElement = () =>
  screen.getByRole('textbox', { name: /message/i })
const getSubmitButton = () => screen.getByRole('button')

describe('ContactForm', () => {
  it('should display validation errors when submitted values are empty', async () => {
    const { user } = setup(<ContactForm submit={mockSubmit} />)

    await user.click(getSubmitButton())

    expect(screen.getByText(strings.nameMinLength)).toBeInTheDocument()
    expect(screen.getByText(strings.emailInvalid)).toBeInTheDocument()
    expect(
      screen.getByText(strings.contactMessageMinLength)
    ).toBeInTheDocument()
    expect(mockSubmit).not.toHaveBeenCalled()
  })

  it('should display max length error when submitted name is too long', async () => {
    const { user } = setup(<ContactForm submit={mockSubmit} />)

    await user.type(getNameInputElement(), 'a'.repeat(71))
    await user.type(getEmailInputElement(), 'test@gmail.com')
    await user.type(getMessageTextareaElement(), 'a'.repeat(21))

    await user.click(getSubmitButton())
    expect(screen.getByText(strings.nameMaxLength)).toBeInTheDocument()
    expect(mockSubmit).not.toHaveBeenCalled()
  })

  it.todo('should display matching error when submitted e-mail is invalid')

  it('should display max length error when submitted message is too long', async () => {
    const { user } = setup(<ContactForm submit={mockSubmit} />)

    await user.type(getNameInputElement(), 'a'.repeat(10))
    await user.type(getEmailInputElement(), 'test@gmail.com')
    await user.type(getMessageTextareaElement(), 'a'.repeat(1001))

    await user.click(getSubmitButton())
    expect(
      screen.getByText(strings.contactMessageMaxLength)
    ).toBeInTheDocument()
    expect(mockSubmit).not.toHaveBeenCalled()
  })

  it('should display error message when submission fails', async () => {
    const { user } = setup(<ContactForm submit={mockSubmitWithRejection} />)

    const name = 'a'.repeat(10)
    const email = 'test@gmail.com'
    const message = 'a'.repeat(100)

    await user.type(getNameInputElement(), name)
    await user.type(getEmailInputElement(), email)
    await user.type(getMessageTextareaElement(), message)

    await user.click(getSubmitButton())

    expect(mockSubmitWithRejection).toHaveBeenCalledWith({
      name,
      email,
      message,
    })

    expect(screen.getByText(strings.somethingWentWrong)).toBeInTheDocument()

    // Form does not reset
    expect(getNameInputElement()).toHaveValue(name)
    expect(getEmailInputElement()).toHaveValue(email)
    expect(getMessageTextareaElement()).toHaveValue(message)
  })

  it('should display confirmation message when submitted values are valid', async () => {
    const { user } = setup(<ContactForm submit={mockSubmit} />)

    const name = 'a'.repeat(10)
    const email = 'test@gmail.com'
    const message = 'a'.repeat(100)

    await user.type(getNameInputElement(), name)
    await user.type(getEmailInputElement(), email)
    await user.type(getMessageTextareaElement(), message)

    await user.click(getSubmitButton())

    expect(mockSubmit).toHaveBeenCalledWith({
      name,
      email,
      message,
    })

    expect(screen.getByText(strings.messageSent)).toBeInTheDocument()

    // Form resets
    expect(getNameInputElement()).toHaveValue('')
    expect(getEmailInputElement()).toHaveValue('')
    expect(getMessageTextareaElement()).toHaveValue('')
  })
})
