import { submitContactForm, SubmitParameters } from '@/api/contactForm'
import { fetchData } from '@/api/fetchData'

jest.mock('@/api/fetchData')

describe('submitContactForm', () => {
  it('should return a success message when successful', async () => {
    ;(fetchData as jest.Mock).mockResolvedValueOnce({
      message: 'Success',
    })

    const formData: SubmitParameters = {
      name: 'test',
      email: 'test@gmail.com',
      message: 'hello this is a test message',
    }
    const data = await submitContactForm(formData)

    expect(fetchData).toHaveBeenCalledTimes(1)
    expect(data.message).toBe('Success')
  })

  it('should return an error message when unsuccessful', async () => {
    ;(fetchData as jest.Mock).mockRejectedValueOnce('Error')

    const formData: SubmitParameters = {
      name: 'test',
      email: 'test@gmail.com',
      message: 'hello this is a test message',
    }

    expect.assertions(1)

    try {
      await submitContactForm(formData)
    } catch (error) {
      expect(error).toMatch('Error')
    }
  })
})
