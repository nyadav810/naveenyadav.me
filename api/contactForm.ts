const baseURL = 'https://7x38u4owyj.execute-api.us-east-1.amazonaws.com/staging'

const endpoint = '/contact'

export async function submitContactForm(values: {
  name: string
  email: string
  message: string
}) {
  const response = await fetch(`${baseURL}${endpoint}`, {
    method: 'post',
    body: JSON.stringify(values),
    headers: { 'Content-Type': 'application/json' },
  })

  const data = await response.json()

  return data
}
