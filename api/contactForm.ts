import { fetchData } from './fetchData'

const baseURL = 'https://7x38u4owyj.execute-api.us-east-1.amazonaws.com/staging'

const endpoint = '/contact'

export type SubmitParameters = {
  name: string
  email: string
  message: string
}

export type APIResponse = {
  message: string
}

export async function submitContactForm(
  params: SubmitParameters
): Promise<APIResponse> {
  const request = new Request(`${baseURL}${endpoint}`, {
    method: 'post',
    body: JSON.stringify(params),
    headers: { 'Content-Type': 'application/json' },
  })

  return await fetchData(request)
}
