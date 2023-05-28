// servidor

import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '1e15be3054ac1ad9e1a7c5811c96286f',
    language: 'pt-BR',
    page: 1
  }
})

export default api
