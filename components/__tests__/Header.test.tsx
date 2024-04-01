import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import strings from 'app/en.json'

import Header from '../Header'

const setup = (component: React.ReactElement) => ({
  user: userEvent.setup(),
  ...render(component),
})

describe('Header', () => {
  describe('Social links', () => {
    it('should show LinkedIn tooltip on hover', async () => {
      const { user } = setup(<Header />)

      const link = screen.getByLabelText(strings.linkedinLinkA11yText)

      await user.hover(link)

      expect(
        await screen.findByRole('tooltip', { name: /linkedin/i })
      ).toBeInTheDocument()
    })

    it('should show Github tooltip on hover', async () => {
      const { user } = setup(<Header />)

      const link = screen.getByLabelText(strings.githubLinkA11yText)

      await user.hover(link)

      expect(
        await screen.findByRole('tooltip', { name: /github/i })
      ).toBeInTheDocument()
    })
  })
})
