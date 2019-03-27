import axios from 'axios'

const httpClient = (baseURL) => axios.create({
  timeout: 30000,
  headers: {
    'Content-type': 'application/json',
  },
  baseURL,
})

export class BaseService {
  constructor(baseUrl) {
    this.client = httpClient(baseUrl)
  }

  async get(url) {
    const { data } = await this.client.get(url)
    return data
  }
}
