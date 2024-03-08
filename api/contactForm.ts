const baseURL = 'https://7x38u4owyj.execute-api.us-east-1.amazonaws.com/staging'

const endpoint = '/contact'

export type SubmitParameters = {
  name: string
  email: string
  message: string
}

export async function submitContactForm(params: SubmitParameters) {
  const response = await fetch(`${baseURL}${endpoint}`, {
    method: 'post',
    body: JSON.stringify(params),
    headers: { 'Content-Type': 'application/json' },
  })

  const data = await response.json()

  return data
}
